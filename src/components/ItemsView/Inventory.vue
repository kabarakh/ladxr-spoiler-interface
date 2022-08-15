<script setup lang="ts">
import { useDataStore } from "@/stores/data";
import InventoryItem from "@/components/ItemsView/InventoryItem.vue";
import router from "@/router";
import { ref } from "vue";

const store = useDataStore();
if (!store.seed) {
  router.push("/");
}

const fairyImgUrl = `./InventoryIcons/fairy.png`;

const displayItemIdentifier = ref("");

const setDisplayItemIdentifier = (newIdentifier: string) => {
  if (displayItemIdentifier.value === newIdentifier) {
    displayItemIdentifier.value = "";
  } else {
    displayItemIdentifier.value = newIdentifier;
  }
};
</script>

<style lang="scss" scoped>
.inventory-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.dungeon-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  .dungeon {
    width: 20%;
  }

  .d8,
  .d5 {
    margin-left: 20%;
  }

  .d1,
  .d4 {
    margin-left: 10%;
  }

  .d9 {
    margin-left: 10%;
  }

  .d7,
  .d6 {
    margin-left: 10%;
  }

  .d2,
  .d3 {
    margin-left: 40%;
  }

  .main-item {
    text-align: center;
  }

  .sub-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;

    > div {
      width: 50%;
    }
  }
}
</style>

<template>
  <p>Click an item to reveal the locations</p>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SHIELD')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SWORD')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TOADSTOOL')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MAGIC_POWDER')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SHOVEL')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BOMB')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BOW')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('RED_TUNIC')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('FEATHER')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('POWER_BRACELET')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('PEGASUS_BOOTS')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('FLIPPERS')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('HOOKSHOT')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MAGIC_ROD')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BOOMERANG')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BLUE_TUNIC')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('OCARINA')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SONG1')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SONG2')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SONG3')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BOWWOW')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('ROOSTER')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SEASHELL')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('GOLD_LEAF')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TAIL_KEY')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('ANGLER_KEY')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('FACE_KEY')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BIRD_KEY')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SLIME_KEY')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MAX_POWDER_UPGRADE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MAX_BOMBS_UPGRADE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MAX_ARROWS_UPGRADE')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_YOSHI_DOLL')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_RIBBON')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_DOG_FOOD')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_BANANAS')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_STICK')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_HONEYCOMB')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_PINEAPPLE')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_HIBISCUS')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_LETTER')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_BROOM')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_FISHING_HOOK')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_NECKLACE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_SCALE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('TRADING_ITEM_MAGNIFIYING_GLASS')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('HEART_CONTAINER')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('HEART_PIECE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('RUPEES_500')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('RUPEES_200')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('RUPEES_100')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('RUPEES_50')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('RUPEES_20')[0]"
    />
  </div>
  <div class="inventory-row">
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('SINGLE_ARROW')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('ARROWS_10')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MEDICINE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('GEL')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('MESSAGE')[0]"
    />
    <InventoryItem
      :displayItemIdentifier="displayItemIdentifier"
      :setDisplayItemIdentifier="setDisplayItemIdentifier"
      :item="store.getItemsByIdentifier('BAD_HEART_CONTAINER')[0]"
    />
  </div>
  <div class="dungeon-wrapper">
    <div class="dungeon d8">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT8')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS8')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP8')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY8')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY8')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK8')[0]"
        />
      </div>
    </div>
    <div class="dungeon d1">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT1')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS1')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP1')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY1')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY1')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK1')[0]"
        />
      </div>
    </div>
    <div class="dungeon d9">
      <div class="main-item">
        <div class="inventory-item">
          <img :src="fairyImgUrl" alt="Color Dungeon Fairy" class="icon" />
        </div>
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS9')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP9')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY9')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY9')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK9')[0]"
        />
      </div>
    </div>
    <div class="dungeon d7">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT7')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS7')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP7')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY7')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY7')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK7')[0]"
        />
      </div>
    </div>
    <div class="dungeon d2">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT2')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS2')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP2')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY2')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY2')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK2')[0]"
        />
      </div>
    </div>
    <div class="dungeon d6">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT6')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS6')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP6')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY6')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY6')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK6')[0]"
        />
      </div>
    </div>
    <div class="dungeon d3">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT3')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS3')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP3')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY3')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY3')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK3')[0]"
        />
      </div>
    </div>
    <div class="dungeon d5">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT5')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS5')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP5')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY5')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY5')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK5')[0]"
        />
      </div>
    </div>
    <div class="dungeon d4">
      <div class="main-item">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('INSTRUMENT4')[0]"
        />
      </div>
      <div class="sub-items">
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('COMPASS4')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('MAP4')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('KEY4')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('NIGHTMARE_KEY4')[0]"
        />
        <InventoryItem
          :displayItemIdentifier="displayItemIdentifier"
          :setDisplayItemIdentifier="setDisplayItemIdentifier"
          :item="store.getItemsByIdentifier('STONE_BEAK4')[0]"
        />
      </div>
    </div>
  </div>
</template>
