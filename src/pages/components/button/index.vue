<script setup lang="ts">
// import { IuButton } from '../../../../packages'
import { IuButton } from 'iu-ui'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div text-30px font-bold>
      Button
    </div>
    <Starport port="iu-button" w-380px h-50px>
      <div mt-30px>
        <IuButton mr-20px @click="$router.back()">
          返回
        </IuButton>
        <IuButton type="warning" mr-20px @click="$router.back()">
          warning
        </IuButton>
        <IuButton type="error" mr-20px @click="$router.back()">
          error
        </IuButton>
        <IuButton type="success" mr-20px @click="$router.back()">
          error
        </IuButton>
      </div>
    </Starport>
  </div>
</template>
