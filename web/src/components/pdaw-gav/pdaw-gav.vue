<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex :key="elevation" xs12>
        <v-sheet class="pa-2" color="grey lighten-3" elevation="10" title="Artifact">
          <v-toolbar>
            <v-toolbar-title>Artifact</v-toolbar-title>
          </v-toolbar>

          <v-layout row wrap>
            <v-flex xs3 text-sm-right>GroupId:</v-flex>
            <v-flex xs3 text-sm-left>
              <code>{{groupId}}</code>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs3 text-sm-right>ArtifactId:</v-flex>
            <v-flex xs3 text-sm-left>
              <code>{{artifactId}}</code>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs3 text-sm-right>Version:</v-flex>
            <v-flex xs3 text-sm-left>
              <code>{{version}}</code>
            </v-flex>
          </v-layout>
        </v-sheet>
      </v-flex>
      <v-flex :key="elevation" xs6>
        <v-sheet
          class="pa-2"
          color="grey lighten-3"
          elevation="10"
          min-height="400px"
          title="Dependencies"
        >
          <v-toolbar>
            <v-toolbar-title>Dependencies</v-toolbar-title>
          </v-toolbar>
        </v-sheet>
      </v-flex>

      <v-flex :key="elevation" xs6>
        <v-sheet
          class="pa-2"
          color="grey lighten-3"
          elevation="10"
          min-height="400px"
          title="Dependencies"
        >
          <v-toolbar>
            <v-toolbar-title>Dependents</v-toolbar-title>
          </v-toolbar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./pdaw-gav.ts"></script>
