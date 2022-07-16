<script setup lang="ts">
import { IuNode } from 'iu-ui/utils'
interface ISpace {
  vertical?: boolean
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  justify?: 'start' | 'end' | 'center' | 'around' | 'between' | 'evenly'
  gap?: string
  gapX?: string
  gapY?: string
}
withDefaults(defineProps<ISpace>(), {
  vertical: false,
  justify: 'start',
})

defineOptions({
  name: 'IuSpace',
})

const slots = useSlots()
const content = slots?.default?.() || []
</script>

<template>
  <div
    class="iu-space"
    :class="`iu-space-justify-${justify} ${align ? `iu-space-align-${align}` : ``} ${vertical ? `iu-space-vertical` : ``}`"
    :style="`gap: ${gap}; column-gap: ${gapX}; row-gap: ${gapY};`"
  >
    <div v-for="(item, index) in content" :key="index">
      <IuNode :content="item" />
    </div>
    <!-- <slot /> -->
  </div>
</template>

<style lang="scss" scoped>
.iu-space {
  --i-apply: flex flex-wrap gap-x-12px gap-y-10px;
}

.iu-space-vertical {
  --i-apply: flex-col;
}

.iu-space-justify-center {
  --i-apply: justify-center;
}

.iu-space-justify-start {
  --i-apply: justify-start;
}

.iu-space-justify-end {
  --i-apply: justify-end;
}

.iu-space-justify-between {
  --i-apply: justify-between;
}

.iu-space-justify-around {
  --i-apply: justify-around;
}

.iu-space-justify-evenly {
  --i-apply: justify-evenly;
}

.iu-space-align-center {
  --i-apply: items-center;
}

.iu-space-align-start {
  --i-apply: items-start;
}

.iu-space-align-end {
  --i-apply: items-end;
}

.iu-space-align-baseline {
  --i-apply: items-baseline;
}

.iu-space-align-stretch {
  --i-apply: items-stretch;
}
</style>
