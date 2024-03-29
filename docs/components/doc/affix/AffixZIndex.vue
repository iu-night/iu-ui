<template>
  <IuSpace>
    <IuButton>
      default
    </IuButton>
    <IuAffix :zIndex="999">
      <IuButton>
        z-index:999
      </IuButton>
    </IuAffix>
    <IuAffix>
      <IuButton type="primary">
        z-index:100
      </IuButton>
    </IuAffix>
  </IuSpace>
</template>
