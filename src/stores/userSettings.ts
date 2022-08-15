import { defineStore } from "pinia";
import { useDataStore } from "@/stores/data";
import { Location } from "@/models/Location";

export const useUserSettingsStore = defineStore({
  id: "ladxr-settings",
  state: () => {
    return {
      markNonAccessible: false,
      markSphereItems: false,
      sphere: 0,
    };
  },
  getters: {
    getSphere: (state) => (!state.markSphereItems ? -1 : parseInt(state.sphere, 10)),
    getMaxSphere: () => {
      const dataStore = useDataStore();
      const spheres = dataStore.locations.map((location: Location) => location.sphere || -1);
      return Math.max(...spheres);
    },
  },
  actions: {
    setMarkNonAccessible(markNonAccessible: boolean) {
      this.markNonAccessible = markNonAccessible;
    },
    setMarkSphereItems(markSphereItems: boolean) {
      this.markSphereItems = markSphereItems;
    },
  },
});
