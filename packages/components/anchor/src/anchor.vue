<script setup lang="ts">
import { IuAffix } from 'iu-ui/components/affix'
import type { StyleValue } from 'vue'
import { anchorProps } from './anchor'

const props = defineProps(anchorProps)

defineOptions({
  name: 'IuAnchor',
})

const isAffix = computed(() => props.affix ? IuAffix : 'div')

const link = ref<string[]>([])

const wrapperStyle = computed<StyleValue>(() => {
  return {
    transform: 'translatey(0px)',
  }
})

const handleScroll = () => {

}
</script>

<template>
  <component :is="isAffix" v-bind="affix ? affixProps : ''">
    <div class="iu-anchor">
      <div class="iu-anchor-line">
        <div class="iu-anchor-cursor-wrapper" :style="wrapperStyle">
          <template v-if="$slots.cursor">
            <slot name="cursor" />
          </template>
          <div v-else class="iu-anchor-cursor" />
        </div>
      </div>
      <slot />
    </div>
  </component>
</template>

<style lang="scss">

</style>
