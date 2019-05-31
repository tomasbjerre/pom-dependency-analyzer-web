#!/bin/bash

#
# Given there are pom-files available. May be downloaded with pom-downloader.
# Produces metadata in metadata-branch of this repo.
#
# You may want instantly updated metadatada in a build automation flow. Then
# you may use the analyze-pom.sh file where you produce new artifacts, like
# a release job.
#

MAVEN_FOLDER=~/.m2/repository/se/bjurr

rm -rf metadata \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b metadata metadata \
 && rm -rf metadata/* \
 && find $MAVEN_FOLDER -type f -name "*.pom" \
 | xargs -I % sh -c '([ ! -e %.dot ] || grep -Fq "\-SNAPSHOT" %) \
 && ./analyze-pom.sh % \
 && echo $(find $MAVEN_FOLDER -name "*.pom.dot" | wc -l)/$(find $MAVEN_FOLDER -name "*.pom" | wc -l)\
 || echo Skipping: %'

cd metadata \
 && git add . \
 && git commit -a -m update --amend \
 && git push -f
