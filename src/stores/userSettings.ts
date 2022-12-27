import { defineStore } from "pinia";
import { useDataStore } from "@/stores/data";
import type { Location } from "@/models/Location";
import { VIEW_MODES } from "@/models/Utility";
import { isNumber, map } from "lodash";

export const useUserSettingsStore = defineStore({
  id: "ladxr-settings",
  state: () => {
    return {
      markNonAccessible: false,
      markSphereItems: false,
      sphere: 0,
      viewMode: VIEW_MODES.GRAPHIC,
    };
  },
  getters: {
    getSphere: (state) => (!state.markSphereItems ? -1 : state.sphere),
    getMaxSphere: () => {
      const dataStore = useDataStore();
      const spheres = map(dataStore.locations, (location: Location) => {
        return isNumber(location.sphere) ? location.sphere : -1;
      });
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
    toggleViewMode() {
      if (this.viewMode === VIEW_MODES.GRAPHIC) {
        this.viewMode = VIEW_MODES.LIST;
      } else {
        this.viewMode = VIEW_MODES.GRAPHIC;
      }
    },
  },
});
