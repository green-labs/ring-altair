(ns ring.middleware.altair
  "Ring middleware for Altair GraphQL Client"
  (:require [camel-snake-kebab.core :as csk]
            [camel-snake-kebab.extras :as cske]
            [clojure.string :as string]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [content-type redirect]]
            [selmer.parser :refer [render-file]]))

(defn- transform-keys->camelCaseKeyword [m]
  (cske/transform-keys csk/->camelCaseKeyword m))

(defn- svg? [uri]
  (some
   true?
   (->> [".svg" ".svgz"]
        (map (partial string/ends-with? uri)))))

(defn- altair-dist-handler [request uri next]
  (let [response ((wrap-resource next "/dist")
                  (assoc request :uri uri))]
    (if (svg? uri)
      (content-type response "image/svg+xml")
      response)))

(defn- render-altair [options]
  (let [config-options (or options {})
        altair-page (render-file
                     "dist/index.html"
                     {:config-options config-options})]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body altair-page}))

(defn wrap-altair [next {:keys [url options]}]
  (fn [request]
    (let [uri (:uri request)
          sub-url-pattern (re-pattern (str url "(.*)"))
          matched-sub-url (re-find  sub-url-pattern uri)
          sub-uri (string/join "/" (rest matched-sub-url))]
      (cond
        (= uri (str url "/")) (render-altair options)
        (string/blank? sub-uri) (redirect (str url "/"))
        :else (-> request (altair-dist-handler sub-uri next))))))