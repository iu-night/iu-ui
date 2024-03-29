<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <IuSpace align="center">
    <IuCheckbox v-model="value" />
    <IuCheckbox v-model="value">
      checkbox
    </IuCheckbox>
  </IuSpace>
</template>
