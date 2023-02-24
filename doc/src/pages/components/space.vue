<script setup lang="ts">
const name = 'Space'
const anchor = [
  'Space',
  'API',
  'Space Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="space" comName="DocSpace">
        <Starport port="iu-space" h-34px w-300px>
          <DocSpace />
        </Starport>
      </ExDisplay>
      <ExDisplay title="居中" name="space" comName="SpaceCenter">
        <SpaceCenter />
      </ExDisplay>
      <ExDisplay title="around" name="space" comName="SpaceAround">
        <SpaceAround />
      </ExDisplay>
      <ExDisplay title="end" name="space" comName="SpaceEnd">
        <SpaceEnd />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="垂直" name="space" comName="SpaceVertical">
        <SpaceVertical />
      </ExDisplay>
      <ExDisplay title="垂直居中" name="space" comName="SpaceVerticalCenter">
        <SpaceVerticalCenter />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <SpaceApi />
    </template>
  </ComPage>
</template>
