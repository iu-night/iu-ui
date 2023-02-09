<template>
  <IuSpace>
    <IuPopover disabled>
      <template #trigger>
        <IuButton>disabled</IuButton>
      </template>
      <span>hover</span>
    </IuPopover>
    <IuPopover>
      <template #trigger>
        <IuButton>enable</IuButton>
      </template>
      <span>hover</span>
    </IuPopover>
  </IuSpace>
</template>
