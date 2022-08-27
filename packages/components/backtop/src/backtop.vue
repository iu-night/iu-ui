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
          <div i-carbon-arrow-up />
        </div>
      </slot>
    </div>
  </transition>
</template>

<style lang="scss">
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
