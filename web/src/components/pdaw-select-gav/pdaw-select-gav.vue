<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-overflow-btn
          :items="groupIds"
          label="Group"
          editable
          item-value="text"
          v-model="selectedGroup"
          v-on:change="groupIdSelected()"
          outline
          color="black"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs12>
        <v-overflow-btn
          :items="artifacts"
          label="Artifact"
          editable
          item-value="text"
          v-model="selectedArtifact"
          v-on:change="artifactIdSelected()"
          outline
          color="black"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs12>
        <v-overflow-btn
          :items="versions"
          label="Version"
          editable
          item-value="text"
          v-model="selectedVersion"
          v-on:change="versionSelected()"
          outline
          color="black"
        ></v-overflow-btn>
      </v-flex>
    </v-layout>

    <v-content>
      <pdaw-gav
        :groupId="selectedGroup"
        :artifactId="selectedArtifact"
        :version="selectedVersion"
      ></pdaw-gav>
    </v-content>
  </v-container>
</template>

<script lang="ts" src="./pdaw-select-gav.ts"></script>
