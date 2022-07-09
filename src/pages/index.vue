<script setup lang="ts">
import { IuButton } from '../../packages'
// const sum = ref<number[]>([111])
</script>

<template>
  <div class="flex flex-col mt-20px justify-center">
    <!-- <div class="font-bold text-30px">
      IU-UI
    </div>
    <div class="font-bold text-30px">
      Home
    </div>
    <div flex justify-center>
      <Starport port="menu" w-141px h-50px transition-all duration-800>
        <HeadNav />
      </Starport>
    </div> -->
    <div>
      <button btn text-sm m="3 t8" @click="$router.push('components/button')">
        开始
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
