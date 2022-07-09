<script setup lang="ts">
import { IuButton } from '../../../../packages'
</script>

<template>
  <div class="flex flex-col mt-20px justify-center">
    <div>
      <IuButton @click="$router.back()">
        返回
      </IuButton>
    </div>
  </div>
</template>
