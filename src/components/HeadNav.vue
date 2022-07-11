<script setup lang="ts">

</script>

<template>
  <div
    flex-inline justify-center items-center w-100px h-50px text-gray-700 dark:text-gray-200 text-25px
  >
    <!-- <RouterLink class="mx-2 icon-btn" to="" title="首页">
      <div i-carbon-activity />
    </RouterLink>

    <RouterLink class="mx-2 icon-btn" to="" title="关于">
      <div i-carbon-dicom-overlay />
    </RouterLink> -->

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
