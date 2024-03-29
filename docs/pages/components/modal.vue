<script setup lang="ts">
const name = 'Modal'
const anchor = [
  'Modal',
  'API',
  'Modal Props',
  'Modal Slots',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="modal" comName="DocModal">
        <Starport port="iu-modal" h-34px w-82px>
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
    <template #api>
      <ModalApi />
    </template>
  </ComPage>
</template>
