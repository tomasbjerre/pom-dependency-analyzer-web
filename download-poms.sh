#!/bin/bash

MAVEN_GROUP=se.bjurr.jmib

rm -rfv metadata \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b metadata metadata \
 && npx pom-downloader -g $MAVEN_GROUP -pt 100 -th 2 -lm metadata \
 && cd metadata && git add . && git commit -a --amend -m "update" && git push -f
