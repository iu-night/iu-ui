<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { affixProps } from './affix'

const props = defineProps(affixProps)

defineOptions({
  name: 'IuAffix',
})

const fixed = ref(false)

const affixRef = shallowRef<HTMLElement>()
const scrollContainer = shallowRef<HTMLElement | Window>()

const { height, width, top, bottom, update } = useElementBounding(affixRef)
const { height: windowHeight } = useWindowSize()

const affixStyle = computed<CSSProperties>(() => {
  if (fixed.value) {
    return {
      width: `${width.value}px`,
      height: `${height.value}px`,
    }
  }
  return {
    width: '',
    height: '',
  }
})
const contentStyle = computed<CSSProperties>(() => {
  if (fixed.value) {
    return {
      width: `${width.value}px`,
      height: `${height.value}px`,
      top: props.position === 'top' ? `${props.offset}px` : '',
      bottom: props.position === 'bottom' ? `${props.offset}px` : '',
      zIndex: props.zIndex,
    }
  }
  return {}
})

const affixUpdate = () => {
  if (!scrollContainer.value)
    return
  if (props.position === 'top')
    fixed.value = props.offset >= top.value
  else
    fixed.value = windowHeight.value - props.offset < bottom.value
}
onMounted(() => {
  scrollContainer.value = window
  update()
})
watchEffect(affixUpdate)
</script>

<template>
  <div ref="affixRef" class="iu-affix" :style="affixStyle">
    <div class="iu-affix-content" :class="{ fixed }" :style="contentStyle">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">

</style>
