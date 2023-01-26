<script setup lang="ts">
import type { Item } from "@/models/Item";
import { useUserSettingsStore } from "@/stores/userSettings";
import { useDataStore } from "@/stores/data";

const props = defineProps(["items"]);
const userSettingsStore = useUserSettingsStore();
const dataStore = useDataStore();

const locations = props.items.map((item: Item) => dataStore.getLocationById(item.locationId));
</script>

<template>
  <ul class="location-list">
    <li
      :class="{
        'not-accessible': userSettingsStore.markNonAccessible && !location.accessible,
        'not-in-sphere':
          userSettingsStore.markSphereItems && (location.sphere > userSettingsStore.sphere || location.sphere === null),
      }"
      v-for="location in locations"
      :key="location.id"
    >
      {{ location.area }} - {{ location.name }}
    </li>
  </ul>
</template>
