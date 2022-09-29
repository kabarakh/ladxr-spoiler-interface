<script setup lang="ts">
import { useUserSettingsStore } from "@/stores/userSettings";
import { VIEW_MODES } from "@/models/Utility";

const userSettingsStore = useUserSettingsStore();
</script>

<style lang="scss" scoped>
label {
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  flex-direction: row;
  width: 2rem;
  height: 1rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #900;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 0.7rem;
  width: 0.7rem;
  left: 0.2rem;
  bottom: 0.1rem;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider:before {
  -webkit-transform: translateX(0.8rem);
  -ms-transform: translateX(0.8rem);
  transform: translateX(0.8rem);
}

/* Rounded sliders */
.slider.round {
  border-radius: 1.5rem;
}

.slider.round:before {
  border-radius: 50%;
}

.toggle {
  display: flex;
  flex-direction: row;
  justify-content: center;

  > span {
    margin: 0 0.5rem;
  }
}
</style>

<template>
  <label>
    View Mode
    <div class="toggle">
      <span>Map/Inventory</span>
      <div class="switch">
        <input
          type="checkbox"
          class="toggle"
          :checked="userSettingsStore.viewMode === VIEW_MODES.LIST"
          @change="userSettingsStore.toggleViewMode()"
        />
        <span class="slider round"></span>
      </div>
      <span>List</span>
    </div>
  </label>
  <label>
    Mark non accessible items/locations
    <input
      type="checkbox"
      :checked="userSettingsStore.markNonAccessible"
      @change="userSettingsStore.setMarkNonAccessible(!userSettingsStore.markNonAccessible)"
    />
  </label>
  <label>
    Mark items/locations in spheres
    <input
      type="checkbox"
      :checked="userSettingsStore.markSphereItems"
      @change="userSettingsStore.setMarkSphereItems(!userSettingsStore.markSphereItems)"
    />
  </label>
  <label v-if="userSettingsStore.markSphereItems">
    Sphere {{ userSettingsStore.sphere }}
    <input type="range" v-model="userSettingsStore.sphere" min="0" :max="userSettingsStore.getMaxSphere" />
  </label>
</template>
