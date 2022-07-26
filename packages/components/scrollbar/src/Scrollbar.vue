<script setup lang="ts">
import Bar from './bar.vue'
import { addResizeListener, removeResizeListener } from './resize-event'
const props = defineProps({
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
  maxHeight: {
    type: String,
    default: '',
  },
  maxWidth: {
    type: String,
    default: '',
  },
  trigger: {
    type: String,
    default: 'always', // hover 鼠标移动上去显示 always 一直显示 none 不显示
  },
  noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
  direction: {
    type: String,
    default: 'all', // all 横向 纵向 都出现滚动条 x 水平 y 垂直
  },
  vBarStyle: Object,
  hBarStyle: Object,
  vThumbStyle: Object,
  hThumbStyle: Object,
})
const emit = defineEmits(['scroll'])
const wrapRef = ref()
const state = reactive({
  vThumbHeight: '0',
  hThumbWidth: '0',
  moveX: '0%',
  moveY: '0%',
  hover: false,
})
/**
     * 真实滚动条滚动时，修改滚动条bar移动距离
     */
function handleScroll(event: Event) {
  const { scrollTop, clientHeight, scrollLeft, clientWidth }: any = event.target
  state.moveY = `${(scrollTop * 100) / clientHeight}%`
  state.moveX = `${(scrollLeft * 100) / clientWidth}%`
  emit('scroll', event)
}
/**
     * 更新thumb的宽高 外层容器高度 / 整个内容的高度（整个可滚动内容区域） =  滚动条thumb的高度 / 滚动轨道的高度（一般滚动轨道的高度与外层容器相等）
     */
const hasVBar = ref(false)
const hasHBar = ref(false)
function update() {
  if (wrapRef.value) {
    const heightPercentage = (wrapRef.value.clientHeight * 100) / wrapRef.value.scrollHeight
    const widthPercentage = (wrapRef.value.clientWidth * 100) / wrapRef.value.scrollWidth
    if (heightPercentage < 100)
      hasVBar.value = true

    else
      hasVBar.value = false

    if (widthPercentage < 100)
      hasHBar.value = true

    else
      hasHBar.value = false

    state.vThumbHeight = heightPercentage < 100 ? `${heightPercentage}%` : ''
    state.hThumbWidth = widthPercentage < 100 ? `${widthPercentage}%` : ''
  }
}
function setScrollTop(value: number) {
  wrapRef.value.scrollTop = value
}
function setScrollLeft(value: number) {
  wrapRef.value.scrollLeft = value
}
onMounted(() => {
  update() // 初始化调用一次，计算滚动条默认高度
  if (!props.noresize)
    addResizeListener(wrapRef.value, update) // 监听元素变化，如果容器DOM变化触发更新
})
onUnmounted(() => {
  if (!props.noresize)
    removeResizeListener(wrapRef.value, update)
})
defineOptions({
  name: 'IuScrollbar',
})
</script>

<template>
  <div
    :class="`iu-scrollbar iu-scrollbar-${trigger}`"
    :style="{ width, height, 'max-height': maxHeight, 'max-width': maxWidth }"
  >
    <div
      ref="wrapRef" class="iu-scrollbar-wrap"
      :class="{ [`iu-scrollbar-wrap-${direction}`]: true }"
      :style="{ 'max-height': maxHeight, 'max-width': maxWidth }"
      @scroll="handleScroll"
    >
      <div class="iu-scrollbar-content">
        <slot />
      </div>

      <Bar
        v-show="hasVBar"
        v-if="direction !== 'x'"
        direction="vertical"
        :parentRef="wrapRef"
        :size="state.vThumbHeight"
        :move="state.moveY"
        :barStyle="vBarStyle"
        :thumbStyle="vThumbStyle"
        class="iu-scrollbar-bar-v-bar"
      />

      <Bar
        v-show="hasHBar"
        v-if="direction !== 'y'"
        direction="horizontal"
        :parentRef="wrapRef"
        :size="state.hThumbWidth"
        :move="state.moveX"
        :barStyle="hBarStyle"
        :thumbStyle="hThumbStyle"
        class="iu-scrollbar-bar-h-bar"
      />
    </div>
  </div>
</template>

<style lang="scss">
.iu-scrollbar {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;

  &.iu-scrollbar-hover {
    .iu-scrollbar-bar {
      opacity: 0;
    }

    &:hover,
    &:focus,
    &:active {
      .iu-scrollbar-bar {
        opacity: 1;
      }
    }
  }

  &.iu-scrollbar-always {
    .iu-scrollbar-bar {
      opacity: 1;
    }
  }

  &.iu-scrollbar-none {
    .iu-scrollbar-bar {
      opacity: 0;
    }
  }
}

.iu-scrollbar-wrap-all {
  overflow: scroll;
}

.iu-scrollbar-wrap-x {
  overflow-x: scroll;
  overflow-y: hidden;
}

.iu-scrollbar-wrap-y {
  overflow-x: hidden;
  overflow-y: scroll;
}

.iu-scrollbar-wrap {
  height: 100%;
  -ms-overflow-style: none;

  // overflow: -moz-scrollbars-none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }
}
</style>
