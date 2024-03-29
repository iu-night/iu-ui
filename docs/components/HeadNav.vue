<script setup lang="ts">

</script>

<template>
  <div
    inline-flex justify-center items-center w-100px h-50px text-gray-700 dark:text-gray-200 text-25px
  >
    <button class="mx-2 icon-btn !outline-none" title="切换主题" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
    <a class="mx-2 icon-btn" rel="noreferrer" href="https://github.com/iu-night/iu-ui" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </div>
</template>

<style scoped>

</style>
