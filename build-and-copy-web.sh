#!/bin/bash
cd web \
 && npm run build \
 && cd .. \
 && cp -rv --remove-destination web/dist/* gh-pages
