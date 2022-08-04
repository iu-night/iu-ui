<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Card
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="card" comName="DocCard" port height="100px" width="300px" />
        <ExDisplay title="悬浮" name="card" comName="CardHoverable" />
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="插槽" name="card" comName="CardSlot" />
        <ExDisplay title="边框" name="card" comName="CardBordered" />
      </IuSpace>
    </IuSpace>
    <CardApi />
  </div>
</template>
