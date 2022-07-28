<script lang="ts" setup>
import { AngleUp } from '@vicons/fa'
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

useEventListener(document, 'scroll', handleScrollThrottled, true)

onMounted(() => {
  el.value = document.documentElement
  if (props.target)
    el.value = document.querySelector<HTMLElement>(`.${props.target}`) ?? undefined
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
        <!-- <Icon> -->
        <AngleUp />
        <!-- </Icon> -->
      </slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.iu-backtop {
  --iu-apply:
    fixed flex-center w-40px h-40px rounded-1/2 z-999
    cursor-pointer select-none text-white bg-teal-600
    shadow-backtop shadow-backtopd
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
