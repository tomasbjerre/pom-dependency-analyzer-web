#!/bin/bash

#
# Given a pom-file.
# Produces metadata in metadata-branch of this repo.
#

POM_FILE=$1

mvn dependency:tree -DoutputType=dot -Doutput=$POM_FILE.dot -f % \
 && npx pom-dependency-analyzer -d $POM_FILE.dot -sf metadata \
