#!/bin/bash

#
# Download pom-files to ~/.m2
#

MAVEN_GROUP=se.bjurr

npx pom-downloader -g $MAVEN_GROUP -pt 100 -th 2 -lm ~/.m2 \
 && cd metadata && git add . && git commit -a --amend -m "update" && git push -f
