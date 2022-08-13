<script setup lang="ts">
const { to = '' } = defineProps<{ to: string }>()

const url = computed(() => useStore().disableJump ? '' : to)
</script>

<template>
  <RouterLink :to="url">
    <slot />
  </RouterLink>
</template>
