import { defineStore } from "pinia";
import { Location } from "@/models/Location";
import { CATEGORIES, Item } from "@/models/Item";
import { Options } from "@/models/Options";
import { Entrance } from "@/models/Entrance";
import { sortBy } from "lodash";

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
      locations: [] as Location[],
      items: [] as Item[],
      options: {} as Options,
      entrances: [] as Entrance[],
      seed: "",
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
      return sortBy(state.entrances, 'from');
    },
    getEntrancesOrderedByExit: (state) => {
      return sortBy(state.entrances, 'to');
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
        newState.locations.push(new Location(entry, true));
        newState.items.push(new Item(entry, true));
      });

      jsonData.inaccessibleItems.forEach((entry) => {
        newState.locations.push(new Location(entry, false));
        newState.items.push(new Item(entry, false));
      });

      for (const entrancesKey in jsonData.entrances) {
        newState.entrances.push(new Entrance(entrancesKey, jsonData.entrances[entrancesKey]));
      }

      this.seed = newState.seed;
      this.options = newState.options;
      this.items = newState.items;
      this.locations = newState.locations;
      this.entrances = newState.entrances;
    },
  },
});
