<script setup lang="ts">
import { IuAffix } from 'iu-ui/components/affix'
import type { StyleValue } from 'vue'
import { anchorKey, anchorProps, getOffsetTop } from './anchor'

const props = defineProps(anchorProps)
const emit = defineEmits<{
  (e: 'click', link: { href: string; title: string; e: MouseEvent }): void
}>()

defineOptions({
  name: 'IuAnchor',
})

const anchorRef = shallowRef<HTMLElement>()

const isAffix = computed(() => props.affix ? IuAffix : 'div')

const linkReg = /#(\S+)$/

const links = ref<string[]>([])
const active = ref('')

const scrollLock = ref(false)
const wrapperStyle = ref({})

const getContainerEl = (container: string | (() => Window | HTMLElement) = 'body') => {
  if (typeof container === 'string')
    return document.querySelector(container) as HTMLElement

  if (typeof container === 'function')
    return container()

  return container
}

const getContainer = computed(() => {
  return getContainerEl(props.container)
})

const updateActiveLinkStyle = () => {
  const ele = anchorRef.value?.querySelector('.iu-anchor>a') as HTMLAnchorElement
  if (!ele)
    return

  const { offsetTop: top, offsetHeight: height } = ele
  wrapperStyle.value = {
    top: `${top}px`,
    height: `${height}px`,
    opacity: 1,
  }
}

const registerLink = (link: string) => {
  links.value.push(link)
}
const unregisterLink = (link: string) => {
  links.value = links.value.filter(item => item !== link)
}

const handleLinkClick = (link: { href: string; title: string; e: MouseEvent }) => {
  emit('click', link)
}

const getLinkEl = (link: string) => {
  if (!document)
    return
  const result = link.match(linkReg)
  if (!result)
    return
  const el = document.getElementById(result[1])
  if (!el)
    return
  return el
}

const setActiveLink = async (link: string): Promise<void> => {
  if (active.value === link)
    return

  active.value = link
  await nextTick()
  updateActiveLinkStyle()
}

const handleScroll = () => {
  // if (scrollLock.value)
  //   return
  const { bounds, targetOffset } = props
  const linkItems: { top: number; link: string }[] = []
  let activeLink = ''

  links.value.forEach((link) => {
    const linkel = getLinkEl(link)
    if (!linkel)
      return
    const top = getOffsetTop(linkel, getContainer.value)
    if (top < bounds + targetOffset) {
      linkItems.push({
        link,
        top,
      })
    }
  })

  if (linkItems.length) {
    const latest = linkItems.reduce((prev, cur) => (prev.top > cur.top ? prev : cur))
    activeLink = latest.link
  }
  setActiveLink(activeLink)
}

const handleScrollTo = (link: string) => {
  const linkel = getLinkEl(link)
  setActiveLink(link)
  if (!linkel)
    return
  linkel.scrollIntoView({ behavior: 'smooth' })
  handleScroll()
  // scrollLock.value = true
  // const { targetOffset } = props
  // const scrollTop = getScroll(scrollContainer.value)
  // const offsetTop = getOffsetTop(linkel, getContainer.value)
  // const top = scrollTop + offsetTop - targetOffset
  // scrollTo(top, {
  //   container: getContainer.value,
  // })
  // scrollLock.value = false
}

provide(anchorKey,
  reactive({
    active,
    registerLink,
    unregisterLink,
    handleScrollTo,
    handleLinkClick,
  }),
)

useEventListener(getContainer.value, 'scroll', handleScroll)

onMounted(() => {
  handleScroll()
})
</script>

<template>
  <component :is="isAffix" v-bind="affix ? affixProps : ''">
    <div ref="anchorRef" class="iu-anchor">
      <div class="iu-anchor-line">
        <div class="iu-anchor-cursor-wrapper" :style="wrapperStyle">
          <!-- <template v-if="$slots.cursor">
            <slot name="cursor" />
          </template>
          <div v-else class="iu-anchor-cursor" /> -->
          <slot name="cursor">
            <div class="iu-anchor-cursor" />
          </slot>
        </div>
      </div>
      <slot />
    </div>
  </component>
</template>

<style lang="scss">
.iu-anchor {
  --iu: relative;
}

.iu-anchor-line {
  --iu:
    absolute overflow-hidden
    top-0 left-0 bottom-0
    w-3px
    rounded-4px
    bg-dark:20 dark:bg-white:20
    transition-background-color-200;
}

.iu-anchor-cursor-wrapper {
  --iu:
    absolute
    w-3px
    transition-200;
}

.iu-anchor-cursor {
  --iu: h-full w-3px bg-teal-500;
}
</style>
