<script setup lang="ts">
</script>

<template>
  <nav class="header">
    <div text-25px font-bold>
      <RouterLink flex to="/">
        <Starport port="iu-ui" w-121px h-45px>
          <IuName />
        </Starport>
      </RouterLink>
    </div>
    <div>
      <Starport port="menu" w-100px h-50px>
        <HeadNav />
      </Starport>
    </div>
  </nav>
</template>

<style scoped lange="scss">
.header {
  --i-apply:
    flex b-b-[#ebebeb] b-b-1px text-xl w-full px-30px text-25px items-center justify-between
    dark:b-b-[#282828];
}
</style>
