<template>
  <IuSpace>
    <IuAnchor
      affix
      :affix-props="{
        offset: 60,
        zIndex: 999,
      }"
      :bounds="55"
    >
      <IuAnchorLink href="#anchor" title="Anchor" />
      <IuAnchorLink href="#api" title="Api" />
      <IuAnchorLink href="#anchor-props" title="Anchor Props" />
      <IuAnchorLink href="#anchorlink-props" title="AnchorLink Props" />
    </IuAnchor>
  </IuSpace>
</template>
