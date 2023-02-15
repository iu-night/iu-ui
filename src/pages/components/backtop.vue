<script setup lang="ts">
const name = 'Backtop'
const anchor = [
  'Backtop',
  'API',
  'Backtop Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="backtop" comName="DocBacktop">
        <DocBacktop />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <BacktopApi />
      <div h-2000px />
    </template>
  </ComPage>
</template>
