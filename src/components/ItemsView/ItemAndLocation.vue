<script setup lang="ts">
import { ref } from "vue";
import { useUserSettingsStore } from "@/stores/userSettings";

const props = defineProps(["item"]);

const displayLocation = ref(false);

const toggleDisplay = () => {
  displayLocation.value = !displayLocation.value;
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
      'not-accessible': userSettingsStore.markNonAccessible && !props.item.accessible,
      'not-in-sphere': userSettingsStore.markSphereItems && (props.item.sphere > userSettingsStore.sphere || props.item.sphere === null)
    }" @click="toggleDisplay">{{ props.item.name }}</span>
    <span v-if="displayLocation">{{ props.item.getLocation().area }} - {{ props.item.getLocation().name }}</span>
  </div>
</template>
