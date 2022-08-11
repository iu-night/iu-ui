<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div>
    <IuButton type="primary" @click="show = !show">
      打开
    </IuButton>
    <IuModal v-model:show="show">
      <div style="width: 300px;">
        modal
      </div>
    </IuModal>
  </div>
</template>
