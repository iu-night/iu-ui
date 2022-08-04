<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Space
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="space" comName="DocSpace" port height="34px" width="300px" />
        <ExDisplay title="居中" name="space" comName="SpaceCenter" />
        <ExDisplay title="around" name="space" comName="SpaceAround" />
        <ExDisplay title="end" name="space" comName="SpaceEnd" />
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="垂直" name="space" comName="SpaceVertical" />
        <ExDisplay title="垂直居中" name="space" comName="SpaceVerticalCenter" />
      </IuSpace>
    </IuSpace>
    <SpaceApi />
  </div>
</template>
