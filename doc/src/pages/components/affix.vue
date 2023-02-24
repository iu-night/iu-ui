<script setup lang="ts">
const name = 'Affix'
const anchor = [
  'Affix',
  'API',
  'Affix Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="affix" comName="DocAffix">
        <DocAffix />
      </ExDisplay>
      <ExDisplay title="z-index" name="affix" comName="AffixZIndex">
        <AffixZIndex />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="offset" name="affix" comName="AffixOffset">
        <AffixOffset />
      </ExDisplay>
    </IuSpace>
    <IuSpace>
      <ExDisplay title="position" name="affix" comName="AffixPosition">
        <AffixPosition />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <AffixApi />
      <div h-1000px />
    </template>
  </ComPage>
</template>
