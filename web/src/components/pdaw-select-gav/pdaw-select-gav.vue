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
          v-on:change="$router.push(selectedGroup)"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs8 justify-start>
        <v-overflow-btn
          :items="artifacts"
          label="Artifact"
          editable
          item-value="text"
          v-model="selectedArtifact"
          v-on:change="onChangeArtifact"
        ></v-overflow-btn>
      </v-flex>
      <v-flex xs8 justify-start>
        <v-overflow-btn
          :items="versions"
          label="Version"
          editable
          item-value="text"
          v-model="selectedVersion"
          v-on:change="onChangeVersion"
        ></v-overflow-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./pdaw-select-gav.ts"></script>
