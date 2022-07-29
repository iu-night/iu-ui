<script lang="ts" setup>
// import { AngleUp } from '@vicons/fa'
// import { Icon } from '@vicons/utils'

import { backtopProps } from './backtop'

const props = defineProps(backtopProps)
const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
})
defineOptions({
  name: 'IuBacktop',
})

const el = shallowRef<HTMLElement>()
const ctr = shallowRef<Document | HTMLElement>()
const backtopVis = ref(false)
const backTopStyle = computed(() => ({
  right: `${props.right}px`,
  bottom: `${props.bottom}px`,
}))

const cubic = (value: number): number => value ** 3

const easeInOutCubic = (value: number): number => value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2

const scrollToTop = () => {
  if (!el.value)
    return
  const beginTime = Date.now()
  const beginValue = el.value.scrollTop
  const frameFunc = () => {
    if (!el.value)
      return
    const progress = (Date.now() - beginTime) / 500
    if (progress < 1) {
      el.value.scrollTop = beginValue * (1 - easeInOutCubic(progress))
      requestAnimationFrame(frameFunc)
    }
    else {
      el.value.scrollTop = 0
      // el.value.scrollTop({
      //   top: 0,
      //   behavior: 'smooth',
      // })
    }
  }
  requestAnimationFrame(frameFunc)
}
const handleScroll = () => {
  if (el.value)
    backtopVis.value = el.value.scrollTop >= props.visibilityHeight
}
const handleClick = (event: MouseEvent) => {
  scrollToTop()
  emit('click', event)
}

const handleScrollThrottled = useThrottleFn(handleScroll, 300)

useEventListener(ctr, 'scroll', handleScrollThrottled, true)

onMounted(() => {
  if (!import.meta.env.SSR) {
    ctr.value = document
    el.value = document.documentElement
    if (props.target)
      el.value = document.querySelector<HTMLElement>(`.${props.target}`) ?? undefined
  }
})
</script>

<template>
  <transition name="iu-fade-in">
    <div
      v-if="backtopVis"
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
