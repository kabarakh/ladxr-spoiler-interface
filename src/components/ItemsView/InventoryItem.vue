<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import { useUserSettingsStore } from "@/stores/userSettings";
import { Item } from "@/models/Item";
import InventoryLocationList from "@/components/ItemsView/InventoryLocationList.vue";

const props = defineProps({
  item: Item,
  setDisplayItemIdentifier: Function,
  displayItemIdentifier: String,
});

let itemIdentifier = props.item?.identifier.toLowerCase() || "404";
if (/^compass/.test(itemIdentifier)) {
  itemIdentifier = "compass";
} else if (/^map/.test(itemIdentifier)) {
  itemIdentifier = "map";
} else if (/^key/.test(itemIdentifier)) {
  itemIdentifier = "small_key";
} else if (/^nightmare_key/.test(itemIdentifier)) {
  itemIdentifier = "nightmare_key";
} else if (/^stone_beak/.test(itemIdentifier)) {
  itemIdentifier = "stone_beak";
}

const imgUrl = `./InventoryIcons/${itemIdentifier}.png`;

const store = useDataStore();
const userSettingsStore = useUserSettingsStore();

const items = store.getItemsByIdentifier(props.item?.identifier || "");
const spheres: number[] = items.map((item: Item) => item.sphere === null ? 999 : parseInt(item.sphere, 10));
const lowestSphere = Math.min(...spheres);

let accessible = false;
items.forEach((item: Item) => {
  if (item.accessible) {
    accessible = true;
  }
});
</script>

<style lang="scss">
.inventory-item {
  position: relative;

  > ul {
    position: absolute;
    width: 400px;
    top: 25%;
    left: 50%;
    background: #303040;
    padding: .5rem 1.5rem;
    border: 1px solid #990000;
    box-shadow: 3px 3px 3px #101010;
    z-index: 5;
  }

  &.not-in-sphere > img {
    filter: grayscale(100%);
  }

  &.not-accessible {
    &::before {
      content: " ";
      background: url("../InventoryIcons/red_cross.png") center center no-repeat;
      background-size: contain;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      z-index: 2;
    }
  }
}
</style>

<template>
  <div class="inventory-item" :class="{
      'not-accessible': userSettingsStore.markNonAccessible && !accessible,
      'not-in-sphere': userSettingsStore.markSphereItems && (lowestSphere > userSettingsStore.sphere || item.sphere === null)
    }" v-if="item" @click="setDisplayItemIdentifier(item.identifier)">
    <img :src="imgUrl" :alt="item.name" class="icon" />
    <InventoryLocationList :items="items" v-if="displayItemIdentifier === item.identifier" />
  </div>
</template>
