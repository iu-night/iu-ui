<script setup lang="ts">
import { IuButton } from 'iu-ui'
</script>

<template>
  <div flex-center flex-col mt-8px>
    <button btn text-18px @click="$router.push('/guide/start')">
      开始
    </button>
    <RouterLink flex to="/components/button">
      <Starport port="iu-button" w-380px h-50px>
        <div mt-30px>
          <IuButton mr-20px>
            返回
          </IuButton>
          <IuButton type="warning" mr-20px>
            warning
          </IuButton>
          <IuButton type="error" mr-20px>
            error
          </IuButton>
          <IuButton type="success" mr-20px>
            error
          </IuButton>
        </div>
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
