#!/bin/bash

rm -rf gh-pages \
 && npm install pom-dependency-analyzer-web-frontend \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b gh-pages gh-pages \
 && rm -rfv gh-pages/* \
 && cp -rv node_modules/pom-dependency-analyzer-web-frontend/dist/* gh-pages \
 && npx pom-dependency-analyzer-web-api -af gh-pages/api \
 && cd gh-pages && git add . && git commit -a -m "Updated" && git push
