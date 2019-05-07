# Pom Dependency Analyzer Web
[![Build Status](https://travis-ci.org/tomasbjerre/pom-dependency-analyzer-web.svg?branch=master)](https://travis-ci.org/tomasbjerre/pom-dependency-analyzer-web)
[![Maven Central](https://maven-badges.herokuapp.com/maven-central/se.bjurr.pomdependencyanalyzerweb/pom-dependency-analyzer-web/badge.svg)](https://maven-badges.herokuapp.com/maven-central/se.bjurr.pomdependencyanalyzerweb/pom-dependency-analyzer-web)
[![Bintray](https://api.bintray.com/packages/tomasbjerre/tomasbjerre/se.bjurr.pomdependencyanalyzerweb%3Apom-dependency-analyzer-web/images/download.svg) ](https://bintray.com/tomasbjerre/tomasbjerre/se.bjurr.pomdependencyanalyzerweb%3Apom-dependency-analyzer-web/_latestVersion)

Uses output of [Pom Dependency Analyzer](https://github.com/tomasbjerre/pom-dependency-analyzer) to create a browsable webpage with graphs. The webpage is completely static and can be served from [Github pages](https://pages.github.com/), [Gitlab pages](https://docs.gitlab.com/ce/user/project/pages/) or by cloning the repo and running on `localhost`.

API documented in [swagger.yml](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/tomasbjerre/pom-dependency-analyzer-web/master/swagger.yml).

Example:

```shell
./pom-dependency-analyzer-web -af gh-pages/api
```

# Usage

```shell
-af, --api-folder <string>                 If supplied, it will dump all API-
                                           responses here.
                                           <string>: any string
                                           Default: null
-h, --help <argument-to-print-help-for>    <argument-to-print-help-for>: an argument to print help for
                                           Default: If no specific parameter is given the whole usage text is given
-ksr, --keep-server-running <boolean>      Keeps the server running.
                                           <boolean>: true or false
                                           Default: false
-md, --metadata <string>                   These key/values will be stored 
                                           together with the artifact. Can be used to 
                                           record things like artifacts git repo or 
                                           artifacts Jenkins job URL. [Supports Multiple occurrences]
                                           <string>: any string
                                           Default: Empty list
-sf, --storage-folder <string>             This is where it will look for 
                                           output of Pom Dependency Analyzer.
                                           <string>: any string
                                           Default: <user home>/.m2/repository
```

# Backend

Developed with Gradle.

Commands:

 * `./gradlew build` - Build backend

# Frontend

Developed with Vue.

Commands:

 * `sudo npm install -g @vue/cli` - Install Vue CLI globally
 * `npm install` - Install dependencies
 * `npm run build` - Build
 * `npm run serve` - Serve

GUI based on: https://github.com/vuetifyjs/vuetify

Recommended setup:

 * Visual Studio Code
   * Extensions
     * `ext install esbenp.prettier-vscode`
     * `ext install octref.vetur`
   * Settings
     * Text editor / Formatting / Format on Save
