<script setup lang="ts">
const name = 'Anchor'
const anchor = [
  'Anchor',
  'API',
  'Anchor Props',
  'AnchorLink Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="anchor" comName="DocAnchor" class="!max-w-450px !2xl:max-w-500px">
        <DocAnchor />
      </ExDisplay>
    </IuSpace>
    <ExDisplay title="affix" name="anchor" comName="AnchorAffix" class="!max-w-450px !2xl:max-w-500px">
      <AnchorAffix />
    </ExDisplay>
    <template #api>
      <AnchorApi />
      <div h-1000px />
    </template>
  </ComPage>
</template>
