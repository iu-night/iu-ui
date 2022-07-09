<script setup lang="ts">
</script>

<template>
  <nav class="header">
    <div flex justify-end>
      <Starport port="menu" w-141px h-50px transition-all duration-800>
        <HeadNav />
      </Starport>
    </div>
  </nav>
</template>

<style scoped lange="scss">
.header {
  @apply flex text-xl w-full px-30px text-16px items-center justify-end;
}
</style>
