<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col mt-10px justify-center">
    <!-- <Header /> -->
    <div class="font-bold text-30px">
      test page
    </div>
    <!-- <div flex justify-end>
      <Starport port="menu" w-141px h-50px transition-all duration-800>
        <HeadNav />
      </Starport>
    </div> -->
    <div>
      <button btn text-sm m="3 t8" @click="$router.back()">
        返回
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
