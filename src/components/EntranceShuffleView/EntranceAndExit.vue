<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["entrance"]);

const displayExit = ref(false);

const toggleDisplay = () => {
  displayExit.value = !displayExit.value;
};
</script>

<template>
  <span @click="toggleDisplay()">{{ entrance.from }}</span>
  <span v-if="displayExit"> -> {{ entrance.to }}</span>
</template>
