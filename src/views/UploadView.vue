<script setup lang="ts">
import { ref } from "vue";
import { useDataStore } from "@/stores/data";

const checkFile = (myEvent: Event) => {
  messageText.value = "";

  const eventTarget = myEvent.target as HTMLInputElement;
  const uploadedFile: File = (eventTarget.files as FileList)[0];

  if (uploadedFile.type !== "application/json") {
    messageText.value = "Please upload a JSON file!";
    return;
  }

  // TODO: validate with AJV

  const reader = new FileReader();
  reader.onload = (loadEvent) => {
    useDataStore().generateStore(JSON.parse((loadEvent.target?.result as string) || "{}"));
  };
  reader.readAsText(uploadedFile);
};

const messageText = ref("");
const validationText = ref("");
</script>

<template>
  <h2>Upload JSON File</h2>
  <div v-if="messageText" class="alert alert-danger">{{ messageText }}</div>
  <input type="file" name="jsonData" @change="checkFile" />
  <div
    v-if="validationText"
    class="alert"
    :class="{ 'alert-danger': validationText === 'invalid', 'alert-success': validationText === 'valid' }"
  >
    {{ validationText }}
  </div>
</template>
