<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { ref } from "vue";

const props = defineProps(['item'])

const store = useDataStore();
const location = store.getLocationById(props.item.locationId);

const displayLocation = ref(false);

const toggleDisplay = () => {
  displayLocation.value = !displayLocation.value;
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>

<template>
  <div>
    <span @click="toggleDisplay">{{item.name}}</span>
    <span v-if="displayLocation">{{location.area}} - {{location.name}}</span>
  </div>
</template>
