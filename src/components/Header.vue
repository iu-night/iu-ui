<script setup lang="ts">
</script>

<template>
  <div class="iu-header">
    <div class="iu-header-logo">
      <RouterLink flex w-130px ml-30px to="/">
        <Starport port="iu-ui" w-121px h-45px relative z-1000>
          <IuName />
        </Starport>
      </RouterLink>
    </div>
    <!-- <div class="w-25px" /> -->
    <!-- <div class="iu-header-blur" /> -->
    <div class="iu-header-blur">
      <Starport port="menu" w-100px h-50px>
        <HeadNav />
      </Starport>
    </div>
  </div>
</template>

<style scoped lang="scss">
.iu-header {
  --iu-apply:
    flex fixed w-full h-55px top-0 left-0 z-889
    text-xl pr-30px text-25px
    items-center justify-between
    backdrop-blur-5px backdrop-saturate-50
    bg-transparent;

  /* b-b-[#ebebeb] b-b-1px
    dark:b-b-[#282828]; */
}

.iu-header-logo {
  --iu-apply:
    flex items-center
    text-25px font-bold
    w-245px h-full;

  & > * {
    --iu-apply: backdrop-blur-0;
  }
}

.iu-header-blur {
  --iu-apply:
    flex-1 h-full
    flex justify-end;
}
</style>
