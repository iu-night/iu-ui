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
  <div flex w-full>
    <div class="flex flex-col mt-30px flex-1">
      <div :id="name?.toLowerCase()" mb-30px text-30px font-bold>
        {{ name }}
      </div>
      <IuSpace>
        <slot />
      </IuSpace>
      <slot name="api" />
    </div>
    <div relative max-w-200px class="lt-lg:hidden">
      <div sticky top-105px>
        <IuAnchor
          :bounds="55"
        >
          <IuAnchorLink v-for="item in anchor" :key="item" :href="getHref(item)" :title="item" />
        </IuAnchor>
      </div>
    </div>
  </div>
</template>
