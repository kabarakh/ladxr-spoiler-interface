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
    <span
      :class="{
        'not-accessible': userSettingsStore.markNonAccessible && !item.accessible,
        'not-in-sphere':
          userSettingsStore.markSphereItems && (item.sphere > userSettingsStore.sphere || item.sphere === null),
      }"
      @click="toggleDisplay"
      >{{ item.name }}</span
    >
    <span v-if="displayLocation">{{ item.getLocation().area }} - {{ item.getLocation().name }}</span>
  </div>
</template>
