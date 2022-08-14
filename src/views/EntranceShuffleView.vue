<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import EntranceAndExit from "@/components/EntranceAndExit.vue";
import router from "@/router";

const store = useDataStore();
if (!store.seed) {
  router.push('/');
}
</script>

<template>
  <h2>Entrances View</h2>
  <p>Click an entrance name to reveal the target</p>
  <div :key="key" v-for="(entrance, key) in store.entrances">
    <EntranceAndExit :entrance="entrance"/>
  </div>
</template>
