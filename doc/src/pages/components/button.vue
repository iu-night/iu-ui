<script setup lang="ts">
const name = 'Button'
const anchor = [
  'Button',
  'API',
  'Button Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="button" comName="DocButton">
        <Starport port="iu-button" h-34px w-490px>
          <DocButton />
        </Starport>
      </ExDisplay>
      <ExDisplay title="禁用" name="button" comName="ButtonDisabled">
        <ButtonDisabled />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="圆角" name="button" comName="ButtonRound">
        <ButtonRound />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <ButtonApi />
    </template>
  </ComPage>
</template>
