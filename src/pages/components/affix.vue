<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Affix
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="affix" comName="DocAffix">
          <DocAffix />
        </ExDisplay>
        <ExDisplay title="z-index" name="affix" comName="AffixZIndex">
          <AffixZIndex />
        </ExDisplay>
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="offset" name="affix" comName="AffixOffset">
          <AffixOffset />
        </ExDisplay>
      </IuSpace>
      <IuSpace>
        <ExDisplay title="position" name="affix" comName="AffixPosition">
          <AffixPosition />
        </ExDisplay>
      </IuSpace>
    </IuSpace>
    <AffixApi />
    <div h-1000px />
  </div>
</template>
