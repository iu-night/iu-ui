<script setup lang="ts">
const name = 'Switch'
const anchor = [
  'Switch',
  'API',
  'Switch Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="switch" comName="DocSwitch">
        <Starport port="iu-switch" h-22px w-92px>
          <DocSwitch />
        </Starport>
      </ExDisplay>
      <ExDisplay title="形状" name="switch" comName="SwitchRound">
        <SwitchRound />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="颜色" name="switch" comName="SwitchColor">
        <SwitchColor />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <SwitchApi />
    </template>
  </ComPage>
</template>
