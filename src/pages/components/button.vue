<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Button
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="button" comName="DocButton" port height="34px" width="375px" />
        <ExDisplay title="禁用" name="button" comName="ButtonDisabled" />
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="圆角" name="button" comName="ButtonRound" />
      </IuSpace>
    </IuSpace>
    <ButtonApi />
  </div>
</template>
