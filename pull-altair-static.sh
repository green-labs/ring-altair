#!/bin/bash

wget -c $(npm view altair-static@5.0.21 dist.tarball) -O - | tar -xz

rm -rf resources/altair
mv package/build/dist resources/altair
rm -rf package

body_closing_pattern="<\/body>"
altair_init_replacement="  <script>AltairGraphQL.init({{config-options|json|safe}})<\/script>\n<\/body>"

sed -i '' -E "s/$body_closing_pattern/$altair_init_replacement/g" resources/altair/index.html

base_pattern="    <base href=\"\/\" \/>"
base_remove_replacement=""

sed -i '' -E "s/$base_pattern/$base_remove_replacement/g" resources/altair/index.html
