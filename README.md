# Ring-Altair

Ring middleware for Altair GraphQL Client.

## Install

```clojure
green-labs/ring-altair {:git/url "https://github.com/green-labs/ring-altair"
                        :git/sha "216a1d1ac0f4523c9d83d5dccae3e55c0737df00"}
```

## Usage

[See possible options](https://github.com/altair-graphql/altair/blob/master/packages/altair-core/src/config.ts)

```clojure
(ns example
  (:require [ring.middleware.altair :refer [wrap-altair]]))

(wrap-altair {:url                     "/altair"
              :initialName             "My Altair"
              :endpointURL             "{{API_ENDPOINT}}/graphql"
              :initialHeaders          {:Authorization "Bearer {{accessToken}}"}
              :initialEnvironments     {:base            {:id        "default_environment"
                                                          :title     "Default environmnet"
                                                          :variables {:API_ENDPOINT "http://localhost:8000"}}
                                        :subEnvironments [{:id        "prod_environment"
                                                            :title     "prod"
                                                            :variables {:API_ENDPOINT "https://prod.api.com"}}]}
              :initialPreRequestScript "console.log(\"initialPreRequestScript\");"})
```
