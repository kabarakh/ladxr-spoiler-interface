<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(['entrance'])

const displayExit = ref(false);

const toggleDisplay = () => {
  displayExit.value = !displayExit.value;
};

</script>

<template>
  <span @click="toggleDisplay()">{{props.entrance.from}}</span>
  <span v-if="displayExit"> -> {{props.entrance.to}}</span>
</template>
