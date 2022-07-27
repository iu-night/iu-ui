<script setup lang="ts">
</script>

<template>
  <div class="iu-header">
    <div text-25px font-bold w-250px>
      <RouterLink flex to="/">
        <Starport port="iu-ui" w-121px h-45px z-1000>
          <IuName />
        </Starport>
      </RouterLink>
    </div>
    <div class="iu-header-blur" />
    <div>
      <Starport port="menu" w-100px h-50px>
        <HeadNav />
      </Starport>
    </div>
  </div>
</template>

<style scoped lange="scss">
.iu-header {
  --iu-apply:
    flex fixed w-full h-55px top-0 left-0 z-889
    text-xl px-30px text-25px
    items-center justify-between
    bg-transparent;

  /* b-b-[#ebebeb] b-b-1px
    dark:b-b-[#282828]; */
}

.iu-header-blur {
  --iu-apply:
    flex-1 h-full
    backdrop-blur-5px backdrop-saturate-50;
}
</style>
