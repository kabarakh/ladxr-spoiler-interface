import { createRouter, createWebHistory } from "vue-router";
import UploadView from "@/views/UploadView.vue";

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
      component: () => import("@/views/ItemsView.vue"),
    },
    {
      path: "/locations",
      name: "locations",
      component: () => import("@/views/LocationsView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/SettingsView.vue"),
    },
    {
      path: "/entances",
      name: "entrances",
      component: () => import("@/views/EntranceShuffleView.vue"),
    },
  ],
});

export default router;
