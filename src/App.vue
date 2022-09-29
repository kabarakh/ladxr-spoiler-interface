<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useDataStore } from "@/stores/data";
import UserSettings from "@/components/SettingsView/UserSettings.vue";

const dataStorage = useDataStore();
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  background: #303040;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
}

.seed-settings {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}
</style>

<template>
  <header>
    <h1>LADXR Spoiler Log Viewer</h1>
    <nav>
      <RouterLink to="/">Upload JSON file</RouterLink>
      <RouterLink v-if="dataStorage.seed" to="/items">Items view</RouterLink>
      <RouterLink v-if="dataStorage.seed" to="/locations">Locations view</RouterLink>
      <RouterLink v-if="dataStorage.seed && dataStorage.entrances.length" to="/entrances">Entrances view </RouterLink>
      <RouterLink v-if="dataStorage.seed" to="/settings">Verify settings</RouterLink>
      <RouterLink to="/imprint">Imprint</RouterLink>
    </nav>
    <div class="seed-settings">
      <div>Current seed: {{ dataStorage.seed || "-" }}</div>
      <div class="user-settings">
        <UserSettings v-if="dataStorage.seed" />
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <a href="https://github.com/kabarakh/ladxr-spoiler-interface/">Fork/View/Star on Github</a>
  </footer>
</template>
