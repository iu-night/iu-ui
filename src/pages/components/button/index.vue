<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Button
    </div>
    <Starport port="iu-button" w-296px h-50px>
      <DocButton />
    </Starport>
    <IuSpace vertical class="w-100px">
      <IuButton disabled @click="$router.back()">
        开始
      </IuButton>
      <IuButton disabled type="warning" @click="$router.back()">
        开始
      </IuButton>
      <IuButton disabled type="error" @click="$router.back()">
        开始
      </IuButton>
      <IuButton disabled type="success" @click="$router.back()">
        开始
      </IuButton>
    </IuSpace>
  </div>
</template>
