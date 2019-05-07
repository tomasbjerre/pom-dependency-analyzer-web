<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pom Dependency Analyzer Web</span>
        <br />
        <span class="font-weight-light">
          {{ metadata['number_of_artifacts'] }} artifacts indexed at
          {{ metadata['last_updated'] }}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://petstore.swagger.io/?url=https://raw.githubusercontent.com/tomasbjerre/pom-dependency-analyzer-web/master/swagger.yml"
        target="_blank"
      >
        <span class="mr-2">Swagger</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>

      <v-btn
        flat
        href="https://github.com/tomasbjerre/pom-dependency-analyzer-web"
        target="_blank"
      >
        <span class="mr-2">GitHub</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>content</v-content>
  </v-app>
</template>

<script lang="ts" src="./app.ts"></script>
