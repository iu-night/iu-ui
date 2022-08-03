<script setup lang="ts">
import tippy from 'tippy.js'
const props = defineProps({
  trigger: {
    type: String,
    default: 'click',
  },
  placement: {
    type: String,
    default: 'top',
  },
  arrow: {
    type: Boolean,
    default: true,
  },
})
const emit = defineEmits(['onShow', 'onHide'])
const triggerRef = ref<HTMLElement>()
const bodyRef = ref<HTMLElement>()
let instance: any
onMounted(() => {
  let trigger = props.trigger
  const placement = props.placement
  if (trigger === 'hover')
    trigger = 'mouseenter'

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  instance = tippy(triggerRef.value, {
    theme: 'light',
    trigger,
    content: bodyRef.value,
    animation: 'shift-away-subtle',
    interactive: true,
    placement,
    arrow: props.arrow,
    appendTo: () => document.body,
    allowHTML: true,
    maxWidth: 'none',
    onShow(instance) {
      const node = document.getElementsByTagName('html')[0]
      if (node.classList.contains('dark'))
        instance.popper.children[0].setAttribute('data-theme', 'dark')

      else
        instance.popper.children[0].setAttribute('data-theme', 'light')

      emit('onShow')
    },
    onHide() {
      emit('onHide')
    },
  })
  instance.popper.children[0].setAttribute('data-lew', 'popover')
})
const show = () => {
  instance.show()
}
const hide = () => {
  instance.hide()
}
// defineExpose({ show, hide })
defineOptions({
  name: 'IuPopover',
})
</script>

<template>
  <div class="iu-popover">
    <div ref="triggerRef">
      <div class="iu-trigger">
        <slot name="trigger" />
      </div>
    </div>
    <div ref="contentRef">
      <!-- <slot name="popover-body" :show="show" :hide="hide" /> -->
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.iu-popover {
  --iu-apply: inline-block;

  .iu-trigger {
    --iu-apply: text-0;

    & > div {
      --iu-apply: text-14px;
    }
  }
}
</style>
