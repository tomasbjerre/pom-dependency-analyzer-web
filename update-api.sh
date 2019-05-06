#!/bin/bash
rm -rf gh-pages \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b gh-pages gh-pages \
 && cp swagger.yml gh-pages \
 && ./gradlew clean gitChangelogTask build -i -Dhttp.socketTimeout=60000 -Dhttp.connectionTimeout=60000 \
 && rm -rf gh-pages/api && ./gradlew run --args="-af gh-pages/api" \
 && cd web && npm run build && cd .. && cp -rv --remove-destination web/dist/* gh-pages \
 && cd gh-pages && git add . && git commit -a -m "Updated" && git push
