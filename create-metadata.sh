#!/bin/bash

#
# Given there are pom-files in in metadata-branch of this repo. May be downloaded with pom-downloader.
# Produces metadata in metadata-branch of this repo.
#

MAVEN_FOLDER=~/.m2/repository/se/bjurr/jmib

rm -rfv metadata \
 && git clone git@github.com:tomasbjerre/pom-dependency-web.git -b metadata metadata \
 && find $MAVEN_FOLDER -type f -name "*.pom" \
 | xargs -I % sh -c '([ ! -e %.dot ] || grep -Fq "\-SNAPSHOT" %) \
 && mvn dependency:tree -DoutputType=dot -Doutput=%.dot -f % \
 && npx pom-dependency-analyzer -d %.dot \
 && echo $(find $MAVEN_FOLDER -name "*.pom.dot" | wc -l)/$(find $MAVEN_FOLDER -name "*.pom" | wc -l)\
 || echo Skipping: %'
