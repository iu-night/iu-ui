<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Popover
    </div>
    <IuSpace>
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
    </IuSpace>
    <PopoverApi />
  </div>
</template>
