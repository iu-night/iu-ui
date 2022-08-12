<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Modal
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="modal" comName="DocModal">
          <Starport port="iu-modal" h-34px w-66px>
            <DocModal />
          </Starport>
        </ExDisplay>
        <ExDisplay title="插槽" name="modal" comName="ModalSlot">
          <ModalSlot />
        </ExDisplay>
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="遮罩关闭" name="modal" comName="ModalMask">
          <ModalMask />
        </ExDisplay>
      </IuSpace>
    </IuSpace>
    <ModalApi />
  </div>
</template>
