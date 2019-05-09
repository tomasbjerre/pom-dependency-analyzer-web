<template>
  <v-app>
    <v-content app fixed scroll-off-screen>
      <v-toolbar>
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

        <v-btn
          flat
          href="https://github.com/tomasbjerre/pom-dependency-analyzer-web"
          target="_blank"
        >
          <span class="mr-2">GitHub</span>
          <v-icon>open_in_new</v-icon>
        </v-btn>
      </v-toolbar>

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PdawToolbar from './components/pdaw-toolbar/pdaw-toolbar';
import PdawSelectGav from './components/pdaw-select-gav/pdaw-select-gav';
import PdawGav from './components/pdaw-gav/pdaw-gav';
@Component({
  components: {
    PdawToolbar,
    PdawSelectGav,
    PdawGav,
  },
})
export default class App extends Vue {}
</script>
