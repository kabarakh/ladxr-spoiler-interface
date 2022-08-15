<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import ItemAndLocation from "@/components/ItemsView/ItemAndLocation.vue";

const props = defineProps(["category"]);

const store = useDataStore();
const items = store.getItemsByCategory(props.category).sort((a, b) => {
  if (/\d+ Rupees/.test(a.name) && /\d+ Rupees/.test(b.name)) {
    const aRupees = parseInt(a.name.substring(0, a.name.indexOf(" ")), 10);
    const bRupees = parseInt(b.name.substring(0, b.name.indexOf(" ")), 10);
    return aRupees - bRupees;
  } else {
    return a.name.localeCompare(b.name, undefined, { sensitivity: "accent" });
  }
});

const scrollToTop = () => {
  scrollTo({ top: 0 });
};
</script>

<template>
  <div class="list-entry" :key="item.locationId" v-for="item in items">
    <ItemAndLocation :item="item" />
  </div>
  <a @click.prevent="scrollToTop">Back to top</a>
</template>
