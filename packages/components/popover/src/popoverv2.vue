<script setup lang="ts">
import { isClient } from '@vueuse/core'
import type { IInstance } from './popover'
import { popoverProps } from './popover'
import TriggerRef from './triggerRef'

// interface IPlacementOffset {
//   top: string
//   left: string
//   transform: string
// }

const props = defineProps(popoverProps)

defineOptions({
  name: 'IuPopover',
})

const triggerRef = shallowRef<HTMLElement | null>(null)
const popoverRef = shallowRef<HTMLElement | null>(null)
const offsetContainerRef = shallowRef<HTMLElement | null>(null)
const show = ref(true)

const setTargetRef = (el: HTMLElement | null): void => {
  triggerRef.value = el
}

const { isOutside } = useMouseInElement(triggerRef)

// const target = useSlots()?.trigger

const { top, right, bottom, left, height, width } = useElementBounding(triggerRef)
const { top: top1, right: right1, bottom: bottom1, left: left1, height: height1, width: width1 } = useElementBounding(popoverRef)

const topStyle = computed(() => {
  const tX = `${Math.round(top.value - height1.value)}px`
  const tY = `${Math.round(left.value - width1.value / 2 + width.value / 2)}px`
  return {
    // transform: `translateX(${tY}) translateY(${tX}) translateX(-50%) `,
    transform: `translate3d(${tY},${tX},0)`,
  }
})

watch(isOutside, (value) => {
  if (value)
    show.value = true
  else
    show.value = true
})
</script>

<template>
  <TriggerRef :setRef="setTargetRef">
    <slot name="trigger" />
  </TriggerRef>
  <Teleport :to="to">
    <div ref="offsetContainerRef" class="iu-popover">
      <div class="iu-popover-container" :style="topStyle">
        <transition name="iu-popover">
          <div v-show="show" ref="popoverRef" class="iu-popover-content">
            <slot name="default" />
          </div>
        </transition>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
.iu-popover {
  --iu: absolute inset-0 z-9999 h-0;

  .iu-popover-container {
    --iu: absolute z-a;
  }

  .iu-popover-content {
    --iu:
      flex flex-row
      absolute z-a bg-[#ddd]
      px-10px py-8px
      b b-[#222] rounded-4px;
  }
}

// .iu-popover-enter-from,
// .iu-popover-leave-to {
//   opacity: 0;
//   transition: opacity 0.2s ease;
// }

// .iu-popover-leave-from,
// .iu-popover-enter-to {
//   transition: opacity 0.1s ease;
// }
</style>
