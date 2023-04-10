(ns ring.middleware.altair
  "Ring middleware for Altair GraphQL Client"
  (:require [clojure.string :as string]
            [ring.middleware.resource :refer [resource-request]]
            [ring.util.response :refer [redirect]]
            [selmer.parser :refer [render-file]]))


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

(defn altair-request [request {:keys [url options]}]
  (let [uri (:uri request)]
    (if (= uri url)
      (render-altair options)
      (let [root-path (string/replace-first uri #(re-pattern url) "")]
        (resource-request (assoc request :uri root-path) "/altair")))))

(defn altair-handler [{:keys [_url _options] :as options}]
  (fn [request]
    (altair-request request options)))

(defn wrap-altair [_next-handler {:keys [url options]}]
  (fn [request]
    (let [uri (:uri request)
          url (string/replace url #"/$" "")]
      (cond
        (= uri (str url "/")) (redirect url)
        :else (altair-request request options)))))