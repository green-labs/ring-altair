#!/bin/bash

wget -c $(npm view altair-static@5.0.9 dist.tarball) -O - | tar -xz

rm -rf resources/dist
cp -r package/build/* resources/
mv resources/dist resources/altair
rm -rf package


pattern="<\/body>"
replacement="  <script>AltairGraphQL.init({{config-options|json|safe}})<\/script>\n<\/body>"

sed -i '' -E "s/$pattern/$replacement/g" resources/altair/index.html