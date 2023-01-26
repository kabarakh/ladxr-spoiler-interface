import { defineStore } from "pinia";
import type { Location } from "@/models/Location";
import { CATEGORIES, type Item, ITEM_IDENTIFIER_TO_NAME, ITEM_TO_CATEGORY_MAP } from "@/models/Item";
import { Options } from "@/models/Options";
import { type Entrance, ENTRANCE_LIST } from "@/models/Entrance";
import { sortBy } from "lodash";
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
      const newState = {
        seed: jsonData.seed,
        options: new Options(jsonData.options),
        locations: [] as Location[],
        items: [] as Item[],
        entrances: [] as Entrance[],
      };

      jsonData.accessibleItems.forEach((entry) => {
        const newLocation: Location = {
          accessible: true,
          area: entry.area,
          sphere: entry.sphere,
          name: entry.locationName,
          id: entry.id,
          itemIdentifier: entry.itemName,
        };
        newState.locations.push(newLocation);

        const newItem: Item = {
          sphere: entry.sphere,
          identifier: entry.itemName,
          locationId: entry.id,
          name: ITEM_IDENTIFIER_TO_NAME[entry.itemName as keyof typeof ITEM_IDENTIFIER_TO_NAME],
          category: ITEM_TO_CATEGORY_MAP[entry.itemName as keyof typeof ITEM_TO_CATEGORY_MAP],
          accessible: true,
        };
        newState.items.push(newItem);
      });

      jsonData.inaccessibleItems.forEach((entry) => {
        const newLocation: Location = {
          accessible: false,
          area: entry.area,
          sphere: entry.sphere,
          name: entry.locationName,
          id: entry.id,
          itemIdentifier: entry.itemName,
        };
        newState.locations.push(newLocation);

        const newItem: Item = {
          sphere: entry.sphere,
          category: ITEM_TO_CATEGORY_MAP[entry.itemName as keyof typeof ITEM_TO_CATEGORY_MAP],
          identifier: entry.itemName,
          locationId: entry.id,
          name: ITEM_IDENTIFIER_TO_NAME[entry.itemName as keyof typeof ITEM_IDENTIFIER_TO_NAME],
          accessible: true,
        };
        newState.items.push(newItem);
      });

      for (const entrancesKey in jsonData.entrances) {
        const newEntrance: Entrance = {
          from: ENTRANCE_LIST[entrancesKey as keyof typeof ENTRANCE_LIST],
          to: ENTRANCE_LIST[jsonData.entrances[entrancesKey] as keyof typeof ENTRANCE_LIST],
        };
        newState.entrances.push(newEntrance);
      }

      this.seed = newState.seed;
      this.options = newState.options;
      this.items = newState.items;
      this.locations = newState.locations;
      this.entrances = newState.entrances;
    },
  },
});
