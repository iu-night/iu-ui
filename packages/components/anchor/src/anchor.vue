<script setup lang="ts">
import { isClient } from '@vueuse/core'
import { IuAffix } from 'iu-ui/components/affix'
import type { StyleValue } from 'vue'
import { anchorKey, anchorProps, getOffsetTop, getScroll, scrollTo } from './anchor'

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

const getContainerEl = (container: string | (() => Window | HTMLElement | Document) = 'body') => {
  if (!isClient)
    return undefined
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
  const ele = anchorRef.value?.querySelector('.iu-anchor-link-active>a') as HTMLElement
  if (!ele) {
    wrapperStyle.value = {}
    return
  }

  const { offsetTop, offsetHeight } = ele
  wrapperStyle.value = {
    top: `${offsetTop}px`,
    height: `${offsetHeight}px`,
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
  if (!isClient)
    return
  const result = link.match(linkReg)
  if (!result)
    return
  const el = document.getElementById(result[1])
  if (!el)
    return
  return el
}

const setActiveLink = (link: string) => {
  if (active.value === link)
    return

  active.value = link
  nextTick(() => {
    updateActiveLinkStyle()
  })
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

const handleScrollTo = async (link: string) => {
  const linkel = getLinkEl(link)
  // setActiveLink(link)
  if (!linkel)
    return
  // scrollLock.value = true
  linkel.scrollIntoView({ behavior: 'smooth' })
  // handleScroll()
  // const { targetOffset } = props
  // const scrollTop = getScroll(getContainer.value)
  // const offsetTop = getOffsetTop(linkel, getContainer.value)
  // const top = scrollTop + offsetTop - targetOffset
  // scrollTo(top, {
  //   getContainer: window,
  // })
  // setTimeout(() => {
  // scrollLock.value = false
  // }, 400)
}

const _handleScroll = useThrottleFn(handleScroll, 100)

provide(anchorKey,
  reactive({
    active,
    registerLink,
    unregisterLink,
    handleScrollTo,
    handleLinkClick,
  }),
)

onMounted(() => {
  useEventListener(document, 'scroll', _handleScroll, true)
  handleScroll()
})
</script>

<template>
  <component :is="isAffix" v-bind="affix ? affixProps : ''">
    <div ref="anchorRef" class="iu-anchor">
      <div class="iu-anchor-line">
        <div class="iu-anchor-cursor-wrapper" :style="wrapperStyle">
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
    transition-all-200;
}

.iu-anchor-cursor {
  --iu:
    h-full w-3px
    bg-teal-600
    rounded-4px;
}
</style>
