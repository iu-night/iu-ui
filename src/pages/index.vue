<script setup lang="ts">
</script>

<template>
  <div flex-center flex-col mt-8px>
    <button btn mb-30px text-18px @click="$router.push('/guide/start')">
      开始
    </button>
    <IuSpace vertical>
      <RouterLink flex to="/components/button">
        <Starport port="iu-button" w-296px h-50px>
          <DocButton />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/card">
        <Starport port="iu-card" w-300px h-100px>
          <DocCard />
        </Starport>
      </RouterLink>
    </IuSpace>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
