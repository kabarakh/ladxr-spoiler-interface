<script setup lang="ts">
import { CATEGORIES } from "@/models/Item";
import ItemListPerCategory from "@/components/ItemListPerCategory.vue";
import { useDataStore } from "@/stores/data";
import router from "@/router";

const store = useDataStore();
if (!store.getSeed) {
  router.push('/');
}

const scrollToCategory = (key: string) => {
  document.querySelector('#' + key).scrollIntoView(true);
};
</script>

<template>
  <h2>Items View</h2>
  <p>Click an item to reveal the location</p>
  <ul>
    <li :key="key" v-for="(category, key) in CATEGORIES">
      <a @click.prevent="scrollToCategory(key)">{{category}}</a>
    </li>
  </ul>
  <div :key="key" v-for="(category, key) in CATEGORIES">
    <h3 :id="key">{{category}}</h3>
    <ItemListPerCategory :category="category" />
  </div>
</template>
