<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import EntranceAndExit from "@/components/EntranceShuffleView/EntranceAndExit.vue";
import ExitAndEntrance from "@/components/EntranceShuffleView/ExitAndEntrance.vue";
import router from "@/router";

const store = useDataStore();
if (!store.seed) {
  router.push("/");
}
</script>

<template>
  <h2>Entrance Shuffle View</h2>
  <h3>Entrance View</h3>
  <p>Click an entrance name to reveal the target</p>
  <div :key="key" v-for="(entrance, key) in store.getEntrancesOrderedByEntrance">
    <EntranceAndExit :entrance="entrance" />
  </div>

  <h3>Exit View</h3>
  <p>Click an exit name to reveal the entrance for it (e.g. if you know where an item is)</p>
  <div :key="key" v-for="(entrance, key) in store.getEntrancesOrderedByExit">
    <ExitAndEntrance :entrance="entrance" />
  </div>
</template>
