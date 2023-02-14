<template>
  <div class="flex flex-col mt-30px pr-130px">
    <div id="anchor" mb-30px text-30px font-bold>
      Anchor
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="anchor" comName="DocAnchor" class="!max-w-450px !2xl:max-w-500px">
          <DocAnchor />
        </ExDisplay>
      </IuSpace>
      <ExDisplay title="affix" name="anchor" comName="AnchorAffix" class="!max-w-450px !2xl:max-w-500px">
        <AnchorAffix />
      </ExDisplay>
    </IuSpace>
    <AnchorApi />
    <div h-1000px />
    <div absolute top-60px right-20px>
      <IuAnchor
        :bounds="55"
      >
        <IuAnchorLink href="#anchor" title="Anchor" />
        <IuAnchorLink href="#api" title="Api" />
        <IuAnchorLink href="#anchor-props" title="Anchor Props" />
        <IuAnchorLink href="#anchorlink-props" title="AnchorLink Props" />
      </IuAnchor>
    </div>
  </div>
</template>
