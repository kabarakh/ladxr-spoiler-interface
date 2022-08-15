<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import LocationAndItem from "@/components/LocationsView/LocationAndItem.vue";

const props = defineProps(['area'])

const store = useDataStore();
const locations = store.getLocationsByArea(props.area).sort((a, b) =>  a.name.localeCompare(b.name, undefined, {sensitivity: "accent"}));

const scrollToTop = () => {
  scrollTo({top: 0});
};
</script>

<template>
  <div :key="location.id" v-for="location in locations">
    <LocationAndItem :location="location" />
  </div>
  <a @click.prevent="scrollToTop">Back to top</a>
</template>
