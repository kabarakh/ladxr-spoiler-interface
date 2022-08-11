<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import router from "@/router";
import LocationListPerArea from "@/components/LocationListPerArea.vue";

const store = useDataStore();
if (!store.getSeed) {
  router.push('/');
}

const scrollToArea = (area: string) => {
  document.querySelector('#' + generateIdFromArea(area)).scrollIntoView(true);
};

const generateIdFromArea = (area: string): string => {
  return area.replace(/[' ]/, '_').toLowerCase();
};

const areas = store.getAllAreas;
</script>

<template>
  <h2>Locations View</h2>
  <p>Click a location to reveal the item</p>
  <ul>
    <li :key="area" v-for="area in areas">
      <a @click.prevent="scrollToArea(area)">{{area}}</a>
    </li>
  </ul>
  <div :key="area" v-for="area in areas">
    <h3 :id="generateIdFromArea(area)">{{area}}</h3>
    <LocationListPerArea :area="area" />
  </div>
</template>
