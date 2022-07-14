<script setup lang="ts">
</script>

<template>
  <div flex-center flex-col mt-8px>
    <button btn mb-30px text-18px @click="$router.push('/guide/start')">
      开始
    </button>
    <!-- <div flex>
          <IuSpace>
            <IuButton>
              返回
            </IuButton>
            <IuButton type="warning">
              开始
            </IuButton>
            <IuButton type="error">
              开始
            </IuButton>
            <IuButton type="success">
              开始
            </IuButton>
          </IuSpace>
        </div> -->
    <RouterLink flex to="/components/button">
      <Starport port="iu-button" w-296px h-50px>
        <DocButton />
      </Starport>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
