<script setup lang="ts">
const value = $ref<string>('')
</script>

<template>
  <IuSpace vertical>
    inputValue: {{ value }}
    <IuInput v-model="value" placeholder="placeholder" />
  </IuSpace>
</template>
