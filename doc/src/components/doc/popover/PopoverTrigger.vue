<template>
  <IuSpace>
    <IuPopover>
      <template #trigger>
        <IuButton>hover</IuButton>
      </template>
      <span>hover</span>
    </IuPopover>
    <IuPopover trigger="click">
      <template #trigger>
        <IuButton>click</IuButton>
      </template>
      <span>click</span>
    </IuPopover>
    <IuPopover trigger="focus">
      <template #trigger>
        <IuButton>focus</IuButton>
      </template>
      <span>focus</span>
    </IuPopover>
    <IuPopover trigger="contextmenu">
      <template #trigger>
        <IuButton>contextmenu</IuButton>
      </template>
      <span>contextmenu</span>
    </IuPopover>
  </IuSpace>
</template>
