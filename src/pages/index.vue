<script setup lang="ts">
const sum = ref<number[]>([111])
</script>

<template>
  <div class="text-center mt-20px">
    <div class="text-30px font-bold">
      IU-UI
    </div>
    <div class="text-30px font-bold">
      Home
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
