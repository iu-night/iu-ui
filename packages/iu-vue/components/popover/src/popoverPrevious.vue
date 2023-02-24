<script setup lang="ts">
import type { IInstance } from './popover'
import { popoverProps } from './popover'
import popTrigger from './popTrigger'

const props = defineProps(popoverProps)

defineOptions({
  name: 'IuPopover',
})

const triggerRef = shallowRef<HTMLElement | null>(null)
const popoverRef = shallowRef<HTMLElement | null>(null)
const show = ref(false)

const setTargetRef = (el: HTMLElement | null): void => {
  triggerRef.value = el
}

const { isOutside } = useMouseInElement(triggerRef)

const { top, right, bottom, left, height, width } = useElementBounding(triggerRef)
const { top: top1, right: right1, bottom: bottom1, left: left1, height: height1, width: width1 } = useElementBounding(popoverRef)

const topStyle = computed(() => {
  const tX = `${Math.round(top.value - height1.value - 10)}px`
  const tY = `${Math.round(left.value - width1.value / 2 + width.value / 2)}px`
  return {
    transform: `translate3d(${tY},${tX},0)`,
  }
})

watch(isOutside, (value) => {
  if (value)
    show.value = false
  else
    show.value = true
})
</script>

<template>
  <popTrigger :setRef="setTargetRef">
    <slot name="trigger" />
  </popTrigger>
  <Teleport :to="to">
    <div class="absolute w-full top-0 left-0 z-3000">
      <transition name="iu-popover">
        <div v-show="show" ref="popoverRef" class="absolute" :style="topStyle">
          <div
            class="
            text-gray-700 dark:text-gray-200
              z-a inline-block relative
              bg-[#eaeaea] dark:bg-[#4e4e4e]
              px-10px py-8px
              rounded-4px"
          >
            <slot name="default" />
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<style lang="scss">
.iu-popover-enter-from,
.iu-popover-leave-to {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.iu-popover-leave-from,
.iu-popover-enter-to {
  transition: opacity 0.2s ease;
}
</style>
