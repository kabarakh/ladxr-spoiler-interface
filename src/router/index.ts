import { createRouter, createWebHistory } from "vue-router";
import UploadView from "@/views/UploadView.vue";
import ItemsView from "@/views/ItemsView.vue";
import LocationsView from "@/views/LocationsView.vue";
import SettingsView from "@/views/SettingsView.vue";
import EntranceShuffleView from "@/views/EntranceShuffleView.vue";
import ImprintView from "@/views/ImprintView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UploadView,
    },
    {
      path: "/items",
      name: "items",
      component: ItemsView,
    },
    {
      path: "/locations",
      name: "locations",
      component: LocationsView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/entrances",
      name: "entrances",
      component: EntranceShuffleView,
    },
    {
      path: "/imprint",
      name: "imprint",
      component: ImprintView,
    },
  ],
});

export default router;
