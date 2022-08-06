<script setup lang="ts">
</script>

<template>
  <div class="iu-header">
    <div class="iu-header-logo">
      <RouterLink flex w-130px to="/">
        <Starport port="iu-ui" w-121px h-45px z-1000>
          <IuName />
        </Starport>
      </RouterLink>
    </div>
    <div class="w-35px" />
    <div class="iu-header-blur" />
    <div>
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
    bg-transparent;

  /* b-b-[#ebebeb] b-b-1px
    dark:b-b-[#282828]; */
}

.iu-header-logo {
  --iu-apply:
    text-25px font-bold pl-30px
    w-245px h-full
    backdrop-blur-5px backdrop-saturate-50;

  & > * {
    --iu-apply: backdrop-blur-0;
  }
}

.iu-header-blur {
  --iu-apply:
    flex-1 h-full
    backdrop-blur-5px backdrop-saturate-50;
}
</style>
