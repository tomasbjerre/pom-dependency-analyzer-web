<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs8 justify-start>
        <v-overflow-btn
          :items="groupIds"
          label="Group"
          editable
          item-value="text"
          v-model="selectedGroup"
          v-on:change="groupIdSelected()"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs8 justify-start>
        <v-overflow-btn
          :items="artifacts"
          label="Artifact"
          editable
          item-value="text"
          v-model="selectedArtifact"
          v-on:change="artifactIdSelected()"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs8 justify-start>
        <v-overflow-btn
          :items="versions"
          label="Version"
          editable
          item-value="text"
          v-model="selectedVersion"
          v-on:change="versionSelected()"
        ></v-overflow-btn>
      </v-flex>
    </v-layout>

    <v-content>
      version: {{selectedVersion}}
      <pdaw-gav></pdaw-gav>
    </v-content>
  </v-container>
</template>

<script lang="ts" src="./pdaw-select-gav.ts"></script>
