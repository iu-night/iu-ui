<script setup lang="ts">
defineProps({
  to: {
    type: String,
    default: '',
  },
})

const isMounted = ref(false)
onMounted(() => {
  nextTick(() => {
    isMounted.value = true
  })
})

defineOptions({
  name: 'IuSend',
})
</script>

<template>
  <teleport v-if="isMounted && to" :to="to">
    <slot />
  </teleport>
  <slot v-else />
</template>
