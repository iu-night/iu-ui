<script setup lang="ts">
import { anchorKey, anchorLinkProps } from './anchor'

const props = defineProps(anchorLinkProps)

defineOptions({
  name: 'IuAnchorLink',
})

const anchor = inject(anchorKey)

const isActive = computed(() => anchor?.active === props.href)

const handleClick = (e: MouseEvent) => {
  const { href, title } = props
  anchor?.handleScrollTo(href)
  anchor?.handleLinkClick({
    href,
    title,
    e,
  })
}

watch(
  () => props.href,
  (val, oldVal) => {
    nextTick(() => {
      anchor?.unregisterLink(oldVal)
      anchor?.registerLink(val)
    })
  },
)

onMounted(() => {
  anchor?.registerLink(props.href)
})

onUnmounted(() => {
  anchor?.unregisterLink(props.href)
})
</script>

<template>
  <div class="iu-anchor-link" :class="{ 'iu-anchor-link-active': isActive }">
    <a :href="href" @click="handleClick">
      {{ title }}
    </a>
  </div>
</template>

<style lang="scss">
.iu-anchor-link {
  --iu:
    flex flex-col
    px-12px py-2px
    hover:c-teal-500;
}

.iu-anchor-link-active {
  --iu: c-teal-500;
}
</style>
