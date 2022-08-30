(ns ring.middleware.altair
  "Ring middleware for Altair GraphQL Client"
  (:require [clojure.string :as string]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [content-type redirect]]
            [selmer.parser :refer [render-file]]))

(defn- svg? [uri]
  (some
   true?
   (->> [".svg" ".svgz"]
        (map (partial string/ends-with? uri)))))

(defn- altair-dist-handler [request uri next]
  (let [response ((wrap-resource next "/altair")
                  (assoc request :uri uri))]
    (if (svg? uri)
      (content-type response "image/svg+xml")
      response)))

(defn- render-altair [options]
  (let [config-options (or options {})
        altair-page (render-file
                     "altair/index.html"
                     {:config-options config-options})]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body altair-page}))

(defn wrap-altair [next {:keys [url options]}]
  (fn [request]
    (let [uri (:uri request)
          url (string/replace url #"/$" "")]
      (cond
        (= uri (str url "/")) (redirect (string/replace uri #"/$" ""))
        (= uri url) (render-altair options)
        :else (-> request (altair-dist-handler uri next))))))