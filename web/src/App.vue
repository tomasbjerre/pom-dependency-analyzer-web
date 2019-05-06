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

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  DefaultApi,
  DefaultApiFp,
  Metadata,
  DefaultApiFactory,
} from './services/pdaw';

@Component
export default class App extends Vue {
  metadata: Metadata[] = [];
  number_of_artifacts = '';
  last_updated = '';

  constructor() {
    super();
  }

  mounted() {
    new DefaultApi().getGlobalMetadata().then(it => {
      this.metadata = it.data;
      this.number_of_artifacts = this.getMetadata('number_of_artifacts');
      this.last_updated = this.getMetadata('last_updated');
    });
  }

  public getMetadata(key: string): string {
    const found: Metadata[] = this.metadata.filter(m => m.key === key);
    if (found.length == 1) {
      return found[0].value;
    }
    return 'Not found';
  }
}
</script>
