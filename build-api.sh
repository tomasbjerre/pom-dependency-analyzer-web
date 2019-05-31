#!/bin/bash

#
# Given pom-dependency-analyzer has been used with output in metadata-branch of this repo.
# Produces browsable webpage, and REST-API, in gh-pages-branch.
#

rm -rf gh-pages \
 && npm install pom-dependency-analyzer-web-frontend \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b gh-pages gh-pages \
 && rm -rf gh-pages/* \
 && cp -rf node_modules/pom-dependency-analyzer-web-frontend/dist/* gh-pages \
 && rm -rf metadata \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b metadata metadata \
 && npx pom-dependency-analyzer-web-api -af gh-pages/api -sf metadata \
 && cd gh-pages && git add . && git commit -a -m "Updated" && git push
