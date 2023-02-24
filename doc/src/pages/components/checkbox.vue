<script setup lang="ts">
const name = 'Checkbox'
const anchor = [
  'Checkbox',
  'API',
  'Checkbox Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="checkbox" comName="DocCheckbox">
        <Starport port="iu-checkbox" h-22px w-118px>
          <DocCheckbox />
        </Starport>
      </ExDisplay>
      <ExDisplay title="圆形" name="checkbox" comName="CheckboxRound">
        <CheckboxRound />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="禁用" name="checkbox" comName="CheckboxDisabled">
        <CheckboxDisabled />
      </ExDisplay>
      <ExDisplay title="颜色" name="checkbox" comName="CheckboxColor">
        <CheckboxColor />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <CheckboxApi />
    </template>
  </ComPage>
</template>
