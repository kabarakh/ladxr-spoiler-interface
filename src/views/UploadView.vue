<script setup lang="ts">
import { ref, watch } from "vue";
import { type JsonData, useDataStore } from "@/stores/data";
import { useFileDialog } from "@vueuse/core";
import Ajv, { JSONSchemaType } from "ajv";
import locationSchema from "@/schema/locationSchema.json";
import spoilerLogSchema from "@/schema/spoilerLog.json";

const { files, open } = useFileDialog();
const dataStore = useDataStore();

const openFileUpload = () => {
  open({
    accept: "application/json",
  });
};

watch(files, async (newFileList: FileList) => {
  validationClass.value = "";
  messageText.value = "";
  const reader = new FileReader();
  reader.onload = async (loadEvent) => {
    const fileContent = JSON.parse((loadEvent.target?.result as string) || "{}");
    const ajv = new Ajv();
    ajv.compile(locationSchema);
    ajv.compile(spoilerLogSchema);
    const schema: JSONSchemaType<JsonData> = spoilerLogSchema;

    try {
      if (ajv.validate(schema, fileContent)) {
        dataStore.generateStore(fileContent);
        validationClass.value = "valid";
      } else {
        messageText.value = "Invalid JSON: " + ajv.errorsText();
        validationClass.value = "invalid";
      }
    } catch (error) {
      messageText.value = `Invalid JSON: Error during validation (${error})`;
      validationClass.value = "invalid";
    }
  };
  reader.readAsText(newFileList.item(0) as File);
});

const resetData = () => {
  dataStore.reset();
};

const messageText = ref("");
const validationClass = ref("");
</script>

<template>
  <h2>Upload JSON File</h2>
  <button @click.prevent="openFileUpload">Upload JSON file</button>
  <div
    v-if="validationClass"
    class="alert"
    :class="{ 'alert-danger': validationClass === 'invalid', 'alert-success': validationClass === 'valid' }"
  >
    {{ messageText }}
  </div>
  <div v-if="dataStore.seed">
    <button @click.prevent="resetData">Reset data</button>
  </div>
</template>
