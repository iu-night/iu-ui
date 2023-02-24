<template>
  <IuSpace>
    <IuPopover placement="left">
      <template #trigger>
        <IuButton>left</IuButton>
      </template>
      <span>left</span>
    </IuPopover>
    <IuPopover>
      <template #trigger>
        <IuButton>top</IuButton>
      </template>
      <span>top</span>
    </IuPopover>
    <IuPopover placement="bottom">
      <template #trigger>
        <IuButton>bottom</IuButton>
      </template>
      <span>bottom</span>
    </IuPopover>
    <IuPopover placement="right">
      <template #trigger>
        <IuButton>right</IuButton>
      </template>
      <span>right</span>
    </IuPopover>
  </IuSpace>
</template>
