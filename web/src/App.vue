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
//import APIS from 'components/client.vue';

export default {
  name: 'App',
  components: {
    /*APIS*/
  },
  data() {
    return {
      number_of_artifacts: 'APIS',
      last_updated: 'APIS.getGlobalMetadata()',
    };
  },
};
</script>
