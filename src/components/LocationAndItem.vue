<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { ref } from "vue";

const props = defineProps(['location'])

const store = useDataStore();
const item = store.getItemByIdentifier(props.location.itemIdentifier);
const displayItem = ref(false);

const toggleDisplay = () => {
  displayItem.value = !displayItem.value;
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
    <span @click="toggleDisplay">{{location.name}}</span>
    <span v-if="displayItem">{{item.name}}</span>
  </div>
</template>
