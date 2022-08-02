<script lang="ts" setup>
// import { AngleUp } from '@vicons/fa'
// import { Icon } from '@vicons/utils'

import { getScrollParent } from 'seemly'
import { backtopProps } from './backtop'

const props = defineProps(backtopProps)
const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
})
defineOptions({
  name: 'IuBacktop',
})

const target = shallowRef<HTMLElement | null>(null)
const backtopVis = ref(false)

const backtopEl = shallowRef<HTMLElement | null>(null)

const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const getScrollTop = (element: Element): number => {
  const top = element ? element.scrollTop : 0
  return Math.max(top, 0)
}

const scrollToTop = () => {
  target.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = () => {
  if (target.value)
    backtopVis.value = getScrollTop(target.value) >= props.visibilityHeight
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
  scrollToTop()
}

const handleScrollThrottled = useThrottleFn(handleScroll, 300)

useEventListener(document, 'scroll', handleScrollThrottled, true)

onMounted(() => {
  target.value = props.target ? document.querySelector(props.target as string) as HTMLElement : getScrollParent(backtopEl.value)
})
</script>

<template>
  <transition name="iu-fade-in">
    <div
      v-show="backtopVis"
      ref="backtopEl"
      class="iu-backtop"
      :style="backTopStyle"
      @click="handleClick"
    >
      <slot>
        <div class="h-20px text-20px w-20px in-flex-center ">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 320 512"><path
            d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
            fill="currentColor"
            data-darkreader-inline-fill=""
          /></svg>
        </div>
      </slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.iu-backtop {
  --iu-apply:
    fixed flex-center w-40px h-40px rounded-1/2 z-999
    cursor-pointer select-none
    text-[#1e1e1e] dark:text-white
    bg-white dark:bg-[#414141]
    shadow-backtop dark:shadow-backtopd
    opacity-80 hover:opacity-100;
}

.iu-fade-in-enter-active,
.iu-fade-in-leave-active {
  transition: all 300ms ease-in-out;
}

.iu-fade-in-enter-from,
.iu-fade-in-leave-active {
  transform: scale(0);
  opacity: 0;
}
</style>
