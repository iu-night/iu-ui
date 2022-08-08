<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Checkbox
    </div>
    <IuSpace>
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
    </IuSpace>
    <CheckboxApi />
  </div>
</template>
