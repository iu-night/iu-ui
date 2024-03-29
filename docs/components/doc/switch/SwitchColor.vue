<script setup lang="ts">
const value = ref<boolean>(true)
const color = '#c12c1f'
</script>

<template>
  <IuSpace align="center">
    <IuSwitch
      v-model="value"
      :color="color"
    />
    <IuSwitch
      v-model="value"
      :color="color"
      :round="false"
    />
  </IuSpace>
</template>
