<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useDataStore } from "@/stores/data";

const dataStorage = useDataStore();
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>

<template>
  <header>
    <h1>LADXR Spoiler Log Viewer</h1>
    <nav>
      <RouterLink to="/">Upload JSON file</RouterLink>
      <RouterLink v-if="dataStorage.getSeed" to="/items">Items view</RouterLink>
      <RouterLink v-if="dataStorage.getSeed" to="/locations">Locations view</RouterLink>
      <RouterLink v-if="dataStorage.getSeed && dataStorage.getAllEntrances.length" to="/entrances">Entrances view</RouterLink>
      <RouterLink v-if="dataStorage.getSeed" to="/settings">Verify settings</RouterLink>
      <RouterLink to="/imprint">Imprint</RouterLink>
    </nav>
    <div>Current seed: {{ dataStorage.getSeed || "-" }}</div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <a href="https://github.com/kabarakh/ladxr-spoiler-interface/">Fork/View/Star on Github</a>
  </footer>
</template>
