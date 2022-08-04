<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Switch
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="switch" comName="DocSwitch" port height="22px" width="92px">
          <DocSwitch />
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
    </IuSpace>
    <SwitchApi />
  </div>
</template>
