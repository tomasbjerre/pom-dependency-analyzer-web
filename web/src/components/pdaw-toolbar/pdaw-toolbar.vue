<template>
  <v-toolbar-title class="headline text-uppercase">
    <span>Pom Dependency Analyzer Web</span>
    <br />
    <span class="font-weight-light">
      {{ metadata['number_of_artifacts'] }} artifacts indexed at
      {{ metadata['last_updated'] }}
    </span>
  </v-toolbar-title>
</template>

<script lang="ts" src="./pdaw-toolbar.ts"></script>
