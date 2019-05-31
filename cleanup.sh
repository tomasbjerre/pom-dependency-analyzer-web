#!/bin/bash

find ~/.m2/repository -name "*.dot" | xargs rm -v
find ~/.m2/repository -name "*.json" | xargs rm -v
