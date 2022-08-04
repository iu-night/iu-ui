<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Space
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="space" comName="DocSpace">
          <Starport port="iu-space" h-34px w-300px>
            <DocSpace />
          </Starport>
        </ExDisplay>
        <ExDisplay title="居中" name="space" comName="SpaceCenter">
          <SpaceCenter />
        </ExDisplay>
        <ExDisplay title="around" name="space" comName="SpaceAround">
          <SpaceAround />
        </ExDisplay>
        <ExDisplay title="end" name="space" comName="SpaceEnd">
          <SpaceEnd />
        </ExDisplay>
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="垂直" name="space" comName="SpaceVertical">
          <SpaceVertical />
        </ExDisplay>
        <ExDisplay title="垂直居中" name="space" comName="SpaceVerticalCenter">
          <SpaceVerticalCenter />
        </ExDisplay>
      </IuSpace>
    </IuSpace>
    <SpaceApi />
  </div>
</template>
