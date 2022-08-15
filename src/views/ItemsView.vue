<script setup lang="ts">
import ItemList from "@/components/ItemsView/ItemList.vue";
import Inventory from "@/components/ItemsView/Inventory.vue";
import { useUserSettingsStore } from "@/stores/userSettings";
import { VIEW_MODES } from "@/models/Utility";

const userSettingsStore = useUserSettingsStore();
</script>

<template>
  <h2>Items View</h2>
  <ItemList v-if="userSettingsStore.viewMode === VIEW_MODES.LIST" />
  <Inventory v-if="userSettingsStore.viewMode === VIEW_MODES.GRAPHIC" />
</template>
