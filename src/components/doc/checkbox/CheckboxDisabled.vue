<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <IuSpace align="center">
    <IuCheckbox v-model="value">
      禁用
    </IuCheckbox>
    <IuCheckbox v-model="value" disabled />
    <IuCheckbox v-model="value" :disabled="value">
      disabled
    </IuCheckbox>
  </IuSpace>
</template>
