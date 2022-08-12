<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div>
    <IuButton @click="show = !show">
      打开
    </IuButton>
    <IuModal
      v-model:show="show"
      title="Modal"
      :maskClose="false"
    >
      <div style="width: 300px;">
        modal
      </div>
    </IuModal>
  </div>
</template>
