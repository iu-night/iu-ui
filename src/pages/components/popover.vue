<script setup lang="ts">
const name = 'Popover'
const anchor = [
  'Popover',
  'API',
  'Popover Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="popover" comName="DocPopover">
        <Starport port="iu-popover" w-330px h-34px>
          <DocPopover />
        </Starport>
      </ExDisplay>
      <ExDisplay title="禁用" name="popover" comName="PopoverDisabled">
        <PopoverDisabled />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="触发" name="popover" comName="PopoverTrigger">
        <PopoverTrigger />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <PopoverApi />
    </template>
  </ComPage>
</template>
