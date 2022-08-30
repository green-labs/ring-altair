#!/bin/bash

wget -c $(npm view altair-static@4.4.1 dist.tarball) -O - | tar -xz

rm -rf resources/dist
cp -r package/build/* resources/
rm -rf package

pattern="<\/body>"
replacement="  <script>AltairGraphQL.init(JSON.parse({{config-options|json|safe}}))<\/script>\n<\/body>"

sed -i '' -E "s/$pattern/$replacement/g" resources/dist/index.html