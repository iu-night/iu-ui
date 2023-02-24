<script setup lang="ts">
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/vue'
import type { StyleValue } from 'vue'
import { popoverProps } from './popover'
import popTrigger from './popTrigger'

const props = defineProps(popoverProps)

defineOptions({
  name: 'IuPopover',
})

const triggerRef = shallowRef<HTMLElement | null>(null)
const popoverRef = shallowRef<HTMLElement | null>(null)
const arrowRef = shallowRef<HTMLElement | null>(null)

const isShow = ref(false)
const toggleShow = useToggle(isShow)

const { x, y, strategy, placement, middlewareData } = useFloating(triggerRef, popoverRef, {
  placement: props.placement,
  whileElementsMounted: autoUpdate,
  middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
})

const popStyle = computed<StyleValue>(() => {
  if (isShow.value) {
    return {
      position: strategy.value,
      top: `${y.value ?? 0}px`,
      left: `${x.value ?? 0}px`,
      width: 'max-content',
    }
  }
  return {}
})

const arrowStyle = computed<StyleValue>(() => {
  if (middlewareData.value.arrow) {
    const { x: arrowX, y: arrowY } = middlewareData.value.arrow
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.value.split('-')[0]]

    return {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      [staticSide!]: '-4px',
    }
  }
  return {}
})

const setTargetRef = (el: HTMLElement | null): void => {
  triggerRef.value = el
}

onClickOutside(popoverRef, () => {
  if (props.disabled)
    return
  if (props.trigger === 'click' || props.trigger === 'contextmenu')
    isShow.value = false
}, {
  ignore: [triggerRef],
})

const onClick = () => {
  if (props.disabled)
    return
  if (props.trigger === 'click')
    toggleShow()
}
const onContextmenu = (e: Event) => {
  if (props.disabled)
    return
  if (props.trigger === 'contextmenu') {
    e.preventDefault()
    toggleShow()
  }
}

const onMouseenter = () => {
  if (props.disabled)
    return
  if (props.trigger === 'hover')
    isShow.value = true
}
const onMouseleave = () => {
  if (props.disabled)
    return
  if (props.trigger === 'hover')
    isShow.value = false
}

const onFocus = () => {
  if (props.disabled)
    return
  if (props.trigger === 'focus')
    isShow.value = true
}
const onBlur = () => {
  if (props.disabled)
    return
  if (props.trigger === 'focus')
    isShow.value = false
}
</script>

<template>
  <popTrigger
    :setRef="setTargetRef"
    @click="onClick"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
    @focus="onFocus"
    @blur="onBlur"
    @contextmenu="onContextmenu"
  >
    <slot name="trigger" />
  </popTrigger>
  <Teleport :to="to">
    <transition name="iu-popover">
      <div
        v-show="isShow"
        ref="popoverRef"
        :style="popStyle"
        @mouseenter="onMouseenter"
        @mouseleave="onMouseleave"
      >
        <div
          class="
        text-gray-700 dark:text-gray-200
          z-a inline-block relative
          bg-[#eaeaea] dark:bg-[#4e4e4e]
          px-8px py-5px
          rounded-4px"
        >
          <slot name="default" />
          <div ref="arrowRef" class="absolute rotate-45 w-2 h-2 bg-inherit" :style="arrowStyle" />
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<style lang="scss">
.iu-popover-enter-from,
.iu-popover-leave-to {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.iu-popover-leave-from,
.iu-popover-enter-to {
  transition: opacity 0.3s ease;
}
</style>
