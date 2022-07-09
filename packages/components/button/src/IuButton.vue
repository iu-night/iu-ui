<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
</style>
