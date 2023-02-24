<script setup lang="ts">
const name = 'Input'
const anchor = [
  'Input',
  'API',
  'Input Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="input" comName="DocInput">
        <Starport port="iu-input" h-70px w-300px>
          <DocInput />
        </Starport>
      </ExDisplay>
      <ExDisplay title="圆角" name="input" comName="InputRound">
        <InputRound />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="状态" name="input" comName="InputState">
        <InputState />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <InputApi />
    </template>
  </ComPage>
</template>
