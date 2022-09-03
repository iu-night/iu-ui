<script setup lang="ts">
const { to = '' } = defineProps<{ to: string }>()

const url = computed(() => useStore().disableJump ? '' : `/components/${to}`)
</script>

<template>
  <RouterLink :to="url">
    <slot />
  </RouterLink>
</template>
