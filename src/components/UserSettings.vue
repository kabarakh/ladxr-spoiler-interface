<script setup lang="ts">
import { useUserSettingsStore } from '@/stores/userSettings';

const userSettingsStore = useUserSettingsStore();
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>

<template>
  <label>
    Mark non accessible items/locations
    <input
        type="checkbox"
        :checked="userSettingsStore.markNonAccessible"
        @change="userSettingsStore.setMarkNonAccessible(!userSettingsStore.markNonAccessible)"
    />
  </label>
  <label>
    Mark items/locations in spheres
    <input
        type="checkbox"
        :checked="userSettingsStore.markSphereItems"
        @change="userSettingsStore.setMarkSphereItems(!userSettingsStore.markSphereItems)"
    />
  </label>
  <label v-if="userSettingsStore.markSphereItems">
    Sphere {{ userSettingsStore.sphere }}
    <input
        type="range"
        v-model="userSettingsStore.sphere"
        min="0"
        :max="userSettingsStore.getMaxSphere"
    />
  </label>
</template>
