(ns ring.middleware.altair
  "Ring middleware for Altair GraphQL Client"
  (:require [clojure.string :as string]
            [ring.middleware.resource :refer [resource-request]]
            [ring.util.response :refer [redirect]]
            [selmer.parser :refer [render-file]]))


(defn- render-altair [options]
  (let [base-url    (:url options)
        altair-page (render-file
                     "altair/index.html"
                     {:base-url       (if (string/ends-with? base-url "/")
                                        base-url
                                        (str base-url "/"))
                      :config-options options})]
    {:status  200
     :headers {"Content-Type" "text/html"}
     :body    altair-page}))

(defn altair-request [request {:keys [url _options]
                               :as   root-opt}]
  (let [uri (:uri request)]
    (if (= uri url)
      (render-altair root-opt)
      (let [root-path (string/replace-first uri (re-pattern url) "")]
        (resource-request (assoc request :uri root-path) "/altair")))))

(defn altair-handler [{:keys [_url _options]
                       :as   root-opt}]
  (fn [request]
    (altair-request request root-opt)))

(defn wrap-altair [_next-handler {:keys [url]
                                  :or   {url "/altair"}
                                  :as   options}]
  (fn [request]
    (let [uri (:uri request)
          url (string/replace url #"/$" "")]
      (cond
        (= uri (str url "/")) (redirect url)
        :else (altair-request request options)))))