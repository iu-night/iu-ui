<template>
  <IuSpace>
    <IuAnchor>
      <IuAnchorLink href="#anchor" title="anchor" />
    </IuAnchor>
    <IuAnchor
      affix
      :affix-props="{
        offset: 60,
        zIndex: 999,
      }"
    >
      <IuAnchorLink href="#anchor" title="anchor" />
    </IuAnchor>
  </IuSpace>
</template>
