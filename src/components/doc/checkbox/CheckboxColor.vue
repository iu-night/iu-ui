<script setup lang="ts">
const value = ref(true)
const color = '#c12c1f'
</script>

<template>
  <IuSpace align="center">
    <IuCheckbox v-model="value" :color="color" />
    <IuCheckbox
      v-model="value"
      :color="color"
      round
    />
    <IuCheckbox
      v-model="value"
      :color="color"
      disabled
    />
    <IuCheckbox
      v-model="value"
      :color="color"
      round
      disabled
    />
  </IuSpace>
</template>
