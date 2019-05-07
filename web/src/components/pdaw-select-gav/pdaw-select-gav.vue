<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs8 justify-start py-5>
        <v-overflow-btn :items="groupIds" label="Group" editable item-value="text"></v-overflow-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src="./pdaw-select-gav.ts"></script>
