<script setup lang="ts">
import { dividerProps } from './divider'

const props = defineProps(dividerProps)

const className = computed(() => {
  return {
    'iu-divider-vertical': props.vertical,
    'iu-divider-dashed': props.dashed,
  }
})
</script>

<template>
  <div class="iu-divider" :class="className" />
</template>

<style lang="scss">
.iu-divider {
  --iu:
    relative
    clear-both
    my-10px mx-0
    w-full min-w-full max-w-full
    b-t-1px b-[#000] b-opacity-30
    dark:b-[#fff] dark:b-opacity-30;
}

.iu-divider-vertical {
  --iu:
    h-14px min-w-1px max-w-1px
    inline-block align-middle
    mx-10px my-0
    b-t-0
    b-l-1px b-[#000] b-opacity-30
    dark:b-[#fff] dark:b-opacity-30;
}

.iu-divider-dashed {
  --iu: b-dashed;
}
</style>
