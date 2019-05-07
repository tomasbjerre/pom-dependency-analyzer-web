<template>
  <v-app>
    <v-toolbar app>
      <pdaw-toolbar></pdaw-toolbar>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://petstore.swagger.io/?url=https://raw.githubusercontent.com/tomasbjerre/pom-dependency-analyzer-web/master/swagger.yml"
        target="_blank"
      >
        <span class="mr-2">Swagger</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>

      <v-btn flat href="https://github.com/tomasbjerre/pom-dependency-analyzer-web" target="_blank">
        <span class="mr-2">GitHub</span>
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-toolbar>

    <pdaw-select-gav></pdaw-select-gav>

    <v-content>content</v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PdawToolbar from './components/pdaw-toolbar/pdaw-toolbar';
import PdawSelectGav from './components/pdaw-select-gav/pdaw-select-gav';
@Component({ components: { PdawToolbar, PdawSelectGav } })
export default class App extends Vue {}
</script>
