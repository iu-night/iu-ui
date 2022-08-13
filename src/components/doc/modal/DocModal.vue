<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div>
    <IuButton @click="show = !show">
      modal
    </IuButton>
    <IuModal v-model:show="show" title="Modal">
      <div style="width: 300px;">
        modal
      </div>
    </IuModal>
  </div>
</template>
