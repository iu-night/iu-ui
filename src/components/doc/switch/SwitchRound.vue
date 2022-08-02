<script setup lang="ts">
const value = ref<boolean>(true)
</script>

<template>
  <IuSpace align="center">
    <IuSwitch v-model="value" :round="value" />
    <IuSwitch v-model="value" :round="false" />
    <IuSwitch v-model="value" :round="!value" />
  </IuSpace>
</template>
