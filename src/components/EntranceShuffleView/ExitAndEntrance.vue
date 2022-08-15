<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["entrance"]);

const displayEntrance = ref(false);

const toggleDisplay = () => {
  displayEntrance.value = !displayEntrance.value;
};

</script>

<template>
  <span @click="toggleDisplay()">{{ props.entrance.to }}</span>
  <span v-if="displayEntrance"> &lt;- {{ props.entrance.from }}</span>
</template>
