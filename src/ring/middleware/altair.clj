(ns ring.middleware.altair
  "Ring middleware for Altair GraphQL Client"
  (:require [clojure.string :as string]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [content-type redirect]]
            [selmer.parser :refer [render-file]]))

(defn- svg? [uri]
  (let [uri-ends-with? (partial string/ends-with? uri)]
    (some true? (->> [".svg" ".svgz"]
                     (map uri-ends-with?)))))

(defn- altair-dist-handler [request next-handler]
  (let [uri (:uri request)
        response ((wrap-resource next-handler "/altair") request)]
    (if (svg? uri)
      (content-type response "image/svg+xml")
      response)))

(defn- render-altair [options]
  (let [config-options (or options {:url "/"})
        base-url (:url config-options)
        altair-page (render-file
                     "altair/index.html"
                     {:base-url (if (string/ends-with? base-url "/") base-url (str base-url "/"))
                      :config-options config-options})]
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body altair-page}))

(defn wrap-altair [next-handler {:keys [url options]}]
  (fn [request]
    (let [uri (:uri request)
          url (string/replace url #"/$" "")]
      (cond
        (= uri (str url "/")) (redirect url)
        (= uri url) (render-altair options)
        :else (-> request (altair-dist-handler next-handler))))))