# Pom Dependency Analyzer Web

This repository shows how to use these parts together to create a browsable webpage with dependents, and dependencies, of Maven artifacts.

- [Pom Downloader](https://github.com/tomasbjerre/pom-downloader) - Downloads pom-files.
- [Pom Dependency Analyzer](https://github.com/tomasbjerre/pom-dependency-analyzer) - Analyzes pom-files and stores metadata on a filesystem.
- [Pom Dependency Analyzer Web API](https://github.com/tomasbjerre/pom-dependency-analyzer-web-api) - Uses metadata to implement a REST API with Maven Artifacts.
- [Pom Dependency Analyzer Web Frontend](https://github.com/tomasbjerre/pom-dependency-analyzer-web-frontend) - Browsable web page where users can inspect Maven artifacts.

See: https://tomasbjerre.github.io/pom-dependency-analyzer-web

## Usage

This repo contains some scripts to get you started:

- `download-poms.sh` - Downloads pom-files to `~/.m2`.
- `create-metadata.sh` - Invokes `analyze-pom.sh` for every `pom` in `~/.m2` and stores metadata in `metadata`-branch.
- `build-api.sh` Builds api in `gh-pages`-branch.

This can be run periodically as a `cron`-job or whatever. Or you can invoke `analyze-pom.sh` when Maven artifacts are published, perhaps in a release-job, to get instantly updated `metadata`.

Main use case is to have a release-job read the `metadata` to determine what other artifacts are depending on the newly released artifact. In order to automate releases of those artifacts as well.

You my supply metadata, like git-repo or Jenkins job, in `analyze-pom.sh` and it will be part of the `metadata.json`.
