<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import EntranceAndExit from "@/components/EntranceShuffleView/EntranceAndExit.vue";
import ExitAndEntrance from "@/components/EntranceShuffleView/ExitAndEntrance.vue";
import router from "@/router";
import { Entrance } from "@/models/Entrance";

const store = useDataStore();
if (!store.seed) {
  router.push("/");
}

const orderedByEntrance = [...store.entrances].sort((a: Entrance, b: Entrance) => {
  return a.from.localeCompare(b.from, undefined, { sensitivity: "accent" });
});

const orderedByExit = [...store.entrances].sort((a: Entrance, b: Entrance) => {
  return a.to.localeCompare(b.to, undefined, { sensitivity: "accent" });
});
</script>

<template>
  <h2>Entrance Shuffle View</h2>
  <h3>Entrance View</h3>
  <p>Click an entrance name to reveal the target</p>
  <div :key="key" v-for="(entrance, key) in orderedByEntrance">
    <EntranceAndExit :entrance="entrance" />
  </div>

  <h3>Exit View</h3>
  <p>Click an exit name to reveal the entrance for it (e.g. if you know where an item is)</p>
  <div :key="key" v-for="(entrance, key) in orderedByExit">
    <ExitAndEntrance :entrance="entrance" />
  </div>
</template>
