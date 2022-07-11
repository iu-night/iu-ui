<script setup lang="ts">
import { IuButton } from '../../packages'
// const sum = ref<number[]>([111])
</script>

<template>
  <div flex-center mt-8px>
    <button btn text-5 @click="$router.push('components/button')">
      开始
    </button>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
