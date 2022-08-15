<script setup lang="ts">
import { ref } from "vue";
import { useUserSettingsStore } from "@/stores/userSettings";

const props = defineProps(["location"]);

const displayItem = ref(false);

const toggleDisplay = () => {
  displayItem.value = !displayItem.value;
};

const userSettingsStore = useUserSettingsStore();
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
    <span :class="{
      'not-accessible': userSettingsStore.markNonAccessible && !location.accessible,
      'not-in-sphere': userSettingsStore.markSphereItems && (location.sphere > userSettingsStore.sphere || location.sphere === null)
    }" @click="toggleDisplay">{{ location.name }}</span>
    <span v-if="displayItem">{{ location.getItem().name }}</span>
  </div>
</template>
