<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <IuSpace align="center">
    <IuCheckbox v-model="value" round />
    <IuCheckbox v-model="value" :round="!value" />
    <IuCheckbox v-model="value" :round="value">
      round
    </IuCheckbox>
  </IuSpace>
</template>
