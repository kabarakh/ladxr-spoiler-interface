<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import router from "@/router";

const store = useDataStore();
if (!store.seed) {
  router.push("/");
}

const options = store.options;
</script>

<template>
  <h2>Verify settings</h2>
  <div>
    Logic: {{ options.logic }}<br />
    Heartpiece shuffle: {{ options.heartpiece }}<br />
    Heartcontainer shuffle: {{ options.heartcontainers }}<br />
    Seashell shuffle: {{ options.seashells }}<br />
    Trade quest item shuffle: {{ options.tradequest }}<br />
    Instrument shuffle: {{ options.instruments }}<br />
    Itmes on owl statues: {{ options.owlstatues }}<br />
    Dungeon item shuffle: {{ options.dungeonItems }}<br />
    Random starting location: {{ options.randomstartlocation }}<br />
    Dungeon shuffle: {{ options.dungeonshuffle }}<br />
    Entrance shuffle: {{ options.entranceshuffle }}<br />
    Randomize Witch item: {{ options.witch }}<br />
    Rooster enabled: {{ options.rooster }}<br />
    Boomerang trade mode: {{ options.boomerang }}<br />
    Stealing from shop: {{ options.steal }}<br />
    Goal: {{ options.goal }}<br />
    Accessibility: {{ options.accessibilityRule }}<br />
    Bowwow mode: {{ options.bowwow }}<br />
    Itempool: {{ options.itempool }}<br />
    Overworld mode: {{ options.overworld }}<br />
  </div>
</template>
