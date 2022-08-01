<script setup lang="ts">
const value = ref<boolean>(true)
</script>

<template>
  <IuSpace align="center">
    <IuSwitch v-model:value="value" />
    <IuSwitch v-model:value="value" disabled />
  </IuSpace>
</template>
