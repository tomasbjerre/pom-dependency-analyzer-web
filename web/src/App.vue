<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Pom Dependency Analyzer Web</span>
        <br />
        <span class="font-weight-light">
          {{ number_of_artifacts }} artifacts indexed at
          {{ last_updated }}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>asdasd
      <v-spacer></v-spacer>
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

<script>
import { DefaultApiFactory } from './components/client/index';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      number_of_artifacts: '123',
      last_updated: '',
    };
  },
  mounted() {
    this.number_of_artifacts = DefaultApiFactory.getGlobalMetadata();
  },
};
</script>
