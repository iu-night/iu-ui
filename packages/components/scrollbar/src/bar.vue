<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import { computed, ref } from 'vue'
import { BAR_MAP } from './utils'
import type { BarMap, BarMapItem } from './index.d'
const props = defineProps({
  parentRef: {
    required: true,
  },
  direction: {
    type: String,
    default: 'vertical', // 支出2个值 水平 horizontal 垂直 vertical
  },
  size: {
    // thumb的宽度或高度
    type: String,
  },
  move: {
    type: String,
  },
  trigger: {
    type: String,
    default: 'hover', // hover 鼠标移动上去显示 always 一直显示 none 不显示
  },
  barStyle: {
    // 设置轨道
    type: Object,
    default: () => ({
      'background-color': '',
    }),
  },
  thumbStyle: {
    // 设置滑块
    type: Object,
    default: () => ({
      'background-color': 'rgba(0, 0, 0, 0.2)',
    }),
  },
})

const barRef = ref()
const bar: ComputedRef<BarMapItem> = computed(() => (BAR_MAP as BarMap)[props.direction])
const thumbStyleObj = computed(() => ({
  ...props.thumbStyle,
  [bar.value.size]: props.size,
  transform: `translate${bar.value.axis}(${props.move})`,
}))
/**
     * 点击轨道 滚动区域滚动到对应的位置 定位到滑块的中心点
     */
const thumbRef = ref()
function handleBarMouseDown(e: any) {
  const client = e[bar.value.client] // 点击位置距客户端顶部或最左边的位置
  const wrap = barRef.value.getBoundingClientRect()[bar.value.direction] // 滚动轨道距顶部或最左边的位置
  const offset = Math.abs(wrap - client) // 距离元素上或左边距的距离
  const thumbHalf = thumbRef.value[bar.value.offset] / 2 // thumb一般的高度
  const $parentWrap = props.parentRef
  const thumbPosPercent = ((offset - thumbHalf) * 100) / barRef.value[bar.value.offset]
  $parentWrap[bar.value.scroll] = (thumbPosPercent * $parentWrap[bar.value.scrollSize]) / 100
}
const thumbDrag = ref(false)
/**
     * 拖动过程中
     */
function handleThumbMove(e: any) {
  if (!thumbDrag.value)
    return

  const client = e[bar.value.client] // 点击位置距客户端顶部或最左边的位置
  const wrap = barRef.value.getBoundingClientRect()[bar.value.direction] // 滚动轨道距顶部或最左边的位置
  const offset = Math.abs(wrap - client) // 距离元素上或左边距的距离
  const thumbHalf = thumbRef.value[bar.value.offset] / 2 // thumb一般的高度
  const $parentWrap = props.parentRef
  const thumbPosPercent = ((offset - thumbHalf) * 100) / barRef.value[bar.value.offset]
  $parentWrap[bar.value.scroll] = (thumbPosPercent * $parentWrap[bar.value.scrollSize]) / 100
}
/**
     * 放开鼠标，拖动结束
     */
function hanldeThumbUp(event: any) {
  thumbDrag.value = false
  if (event.target) {
    document.removeEventListener('mousemove', handleThumbMove) // 注册在document上而不是event.target上是为了更流畅，为了解决鼠标滑动过快，滚动滑块跟不上，和未释放鼠标时，在滑块旁滚动的问题
    document.removeEventListener('mouseup', hanldeThumbUp)
  }
  document.onselectstart = () => null
}
/**
     * 拖拽开始
     */
function startDrag(event: Event) {
  thumbDrag.value = true
  if (event.target) {
    document.addEventListener('mousemove', handleThumbMove)
    document.addEventListener('mouseup', hanldeThumbUp)
  }
  document.onselectstart = () => false
}
/**
     * 鼠标在滑块thumb上按下
     */
function handleThumbMouseDown(event: Event) {
  startDrag(event)
}
</script>

<template>
  <div
    ref="barRef"
    :class="`iu-scrollbar-bar iu-scrollbar-${direction}`"
    :style="barStyle"
    @mousedown="handleBarMouseDown"
  >
    <div
      ref="thumbRef"
      class="iu-scrollbar-thumb"
      :style="thumbStyleObj"
      @mousedown="handleThumbMouseDown"
    />
  </div>
</template>

<style lang="scss">
.iu-scrollbar-bar {
  position: absolute;
  z-index: 1;
  border-radius: 4px;
  transition: opacity 120ms ease-out;

  .iu-scrollbar-thumb {
    width: 0;
    height: 0;
    background-color: rgb(0 0 0 / 70%);
    border-radius: inherit;
    cursor: pointer;
    transition: 0.3 background-color;
  }

  &.iu-scrollbar-vertical {
    top: 0;
    right: 0;
    bottom: 0;
    width: 6px;

    .iu-scrollbar-thumb {
      width: 100%;
    }
  }

  &.iu-scrollbar-horizontal {
    right: 0;
    bottom: 0;
    left: 0;
    height: 6px;

    .iu-scrollbar-thumb {
      height: 100%;
    }
  }
}
</style>
