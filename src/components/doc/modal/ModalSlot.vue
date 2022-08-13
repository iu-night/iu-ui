<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div>
    <IuButton @click="show = !show">
      modal
    </IuButton>
    <IuModal v-model:show="show">
      <template #header>
        #header
      </template>
      <div style="width: 300px;">
        default
      </div>
      <template #footer>
        #footer
      </template>
      <template #action>
        #action
      </template>
    </IuModal>
  </div>
</template>
