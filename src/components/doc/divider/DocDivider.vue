<template>
  <IuSpace vertical>
    <span>实线</span>
    <IuDivider />
    <span>虚线</span>
    <IuDivider dashed />
    <span>分割线</span>
  </IuSpace>
</template>

<style scoped lang="scss">
span {
  color: rgb(55 65 81);

  .dark & {
    color: rgb(229 231 235)
  }
}
</style>
