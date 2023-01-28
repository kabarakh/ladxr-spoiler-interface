import { defineStore } from "pinia";
import type { Location } from "@/models/Location";
import { CATEGORIES, type Item, ITEM_IDENTIFIER_TO_NAME, ITEM_TO_CATEGORY_MAP } from "@/models/Item";
import type { Options } from "@/models/Options";
import {
  ACCESSIBILITY_RULE,
  BOOMERANG_GIFT,
  BOWWOW,
  DUNGEON_ITEMS,
  ENTRANCE_SUFFLE,
  GOALS,
  ITEMPOOL,
  LOGIC,
  OVERWORLD,
  OWLSTATUES,
  STEAL,
} from "@/models/Options";
import { type Entrance, ENTRANCE_LIST } from "@/models/Entrance";
import { forEach, sortBy } from "lodash";
import { useLocalStorage } from "@vueuse/core";

export interface JsonData {
  accessibleItems: any[];
  inaccessibleItems: any[];
  options: any;
  entrances: any;
  seed: string;
}

export const useDataStore = defineStore({
  id: "ladxr-data",
  state: () => {
    return {
      locations: useLocalStorage("data.locations", [] as Location[]),
      items: useLocalStorage("data.items", [] as Item[]),
      options: useLocalStorage("data.options", {} as Options),
      entrances: useLocalStorage("data.entrances", [] as Entrance[]),
      seed: useLocalStorage("data.seed", ""),
    };
  },
  getters: {
    getLocationById: (state) => {
      return (locationId: string) => state.locations.find((location: Location) => location.id === locationId);
    },
    getLocationsByArea: (state) => {
      return (area: string) => state.locations.filter((location: Location) => location.area === area);
    },
    getAllAreas: (state) => {
      const areas: string[] = [];
      state.locations.forEach((location: Location) => {
        if (location.area !== "None" && !areas.includes(location.area)) {
          areas.push(location.area);
        }
      });
      return areas;
    },
    getItemsByIdentifier: (state) => {
      return (itemIdentifier: string): Item[] => state.items.filter((item: Item) => item.identifier === itemIdentifier);
    },
    getItemByLocationId: (state) => {
      return (locationId: string): Item => state.items.find((item: Item) => item.locationId === locationId);
    },
    getItemsByCategory: (state) => {
      return (category: CATEGORIES): Item[] => state.items.filter((item: Item) => item.category === category);
    },
    getEntrancesOrderedByEntrance: (state) => {
      return sortBy(state.entrances, "from");
    },
    getEntrancesOrderedByExit: (state) => {
      return sortBy(state.entrances, "to");
    },
  },
  actions: {
    reset() {
      this.$patch({
        locations: [] as Location[],
        items: [] as Item[],
        options: {} as Options,
        entrances: [] as Entrance[],
        seed: "",
      });
    },
    generateStore(jsonData: JsonData) {
      this.reset();

      this.generateOptionsFromJsonObject(jsonData.options);
      this.generateItemsAndLocationsFromJsonObject({
        accessibleItems: jsonData.accessibleItems,
        inaccessibleItems: jsonData.inaccessibleItems,
      });
      this.generateEntrancesFromJsonObject(jsonData.entrances);
      this.seed = jsonData.seed;
    },
    generateEntrancesFromJsonObject(entrances: any) {
      const entranceList: Entrance[] = [];
      for (const entrancesKey in entrances) {
        entranceList.push({
          from: ENTRANCE_LIST[entrancesKey as keyof typeof ENTRANCE_LIST],
          to: ENTRANCE_LIST[entrances[entrancesKey] as keyof typeof ENTRANCE_LIST],
        });
        this.entrances = entranceList;
      }
    },
    generateItemsAndLocationsFromJsonObject(items: { accessibleItems: any, inaccessibleItems: any }) {
      const itemList: Item[] = [];
      const locationList: Location[] = [];

      forEach(items, (singleItemList: any, type: string) => {
        singleItemList.forEach((entry: any) => {
          itemList.push({
            sphere: entry.sphere,
            category: ITEM_TO_CATEGORY_MAP[entry.itemName as keyof typeof ITEM_TO_CATEGORY_MAP],
            identifier: entry.itemName,
            locationId: entry.id,
            name: ITEM_IDENTIFIER_TO_NAME[entry.itemName as keyof typeof ITEM_IDENTIFIER_TO_NAME],
            accessible: type === "accessibleItem",
          });

          locationList.push({
            accessible: type === "accessibleItem",
            area: entry.area,
            sphere: entry.sphere,
            name: entry.locationName,
            id: entry.id,
            itemIdentifier: entry.itemName,
          });
        });
      });
      this.items = itemList;
      this.locations = locationList;
    },
    generateOptionsFromJsonObject(optionsData: any) {
      this.options = {
        logic: LOGIC[optionsData.logic],
        bowwow: BOWWOW[optionsData.bowwow],
        goal: GOALS[optionsData.goal],
        boomerang: BOOMERANG_GIFT[optionsData.boomerang],
        accessibilityRule: ACCESSIBILITY_RULE[optionsData.accessibility],
        dungeonItems: DUNGEON_ITEMS[optionsData.dungeon_items],
        dungeonshuffle: optionsData.dungeonshuffle,
        entranceshuffle: ENTRANCE_SUFFLE[optionsData.entranceshuffle],
        heartcontainers: optionsData.heartcontainers,
        tradequest: optionsData.tradequest,
        instruments: optionsData.instruments,
        owlstatues: OWLSTATUES[optionsData.owlstatues],
        heartpiece: optionsData.heartpiece,
        seashells: optionsData.seashells,
        itempool: ITEMPOOL[optionsData.itempool],
        overworld: OVERWORLD[optionsData.overworld],
        randomstartlocation: optionsData.randomstartlocation,
        rooster: optionsData.rooster,
        steal: STEAL[optionsData.steal],
        witch: optionsData.witch,
      };
    },
  },
});
