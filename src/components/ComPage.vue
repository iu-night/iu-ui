<script setup lang="ts">
const props = defineProps({
  name: String,
  anchor: {
    type: Array<string>,
    default: () => [''],
  },
})

const getHref = (title: string) => {
  return `#${title.toLowerCase().replace(/\s/, '-')}`
}
</script>

<template>
  <div class="flex flex-col mt-30px relative">
    <div :id="name?.toLowerCase()" mb-30px text-30px font-bold>
      {{ name }}
    </div>
    <IuSpace>
      <slot />
    </IuSpace>
    <slot name="api" />
    <div absolute top-75px right-0>
      <IuAnchor
        affix
        :affix-props="{
          offset: 60,
          zIndex: 999,
        }"
        :bounds="55"
      >
        <IuAnchorLink v-for="item in anchor" :key="item" :href="getHref(item)" :title="item" />
      </IuAnchor>
    </div>
  </div>
</template>
