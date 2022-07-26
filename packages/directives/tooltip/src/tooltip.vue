<script setup>
// 显示弹框
const tooltipShow = ref(false)

// 提示内容
const text = ref()

// 方向
const placements = ref('left')

// 显示
function showTip() {
  tooltipShow.value = true
}
function hiddenTip() {
  tooltipShow.value = false
}

// 位置
const tooltipPostiton = ref({
  x: 0,
  y: 0,
})
const tooltipStyle = computed(() => {
  return {
    transform: `translate3d(${tooltipPostiton.value.x}px,${tooltipPostiton.value.y}px,0)`,
  }
})

defineExpose({ showTip, hiddenTip, tooltipPostiton, text, placements })
</script>

<template>
  <transition name="tooltip">
    <div v-show="tooltipShow" class="iu-tooltip" :style="tooltipStyle">
      <span class="iu-tooltip-text" v-html="text" />
      <div
        class="iu-tooltip-arrow"
        :class="placements"
      />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.iu-tooltip {
  --iu-apply:
    fixed inline-block rounded-5px pointer-events-none
    p-10px font-500 text-12px
    text-gray-700 bg-[#fafafa]
    dark:text-gray-200 dark:bg-[#1e1e1e];

  top: 0;
  left: 0;
  z-index: 1000;
  min-width: 10px;
  line-height: 1.2;
  word-wrap: break-word;
}

.iu-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px;
}

.iu-tooltip-arrow.left {
  --iu-apply: b-transparent b-l-[#fafafa] dark:b-l-[#1e1e1e];

  top: 50%;
  right: -15px;
  transform: translate3d(0, -50%, 0);
}

.iu-tooltip-arrow.bottom {
  --iu-apply: b-transparent b-b-[#fafafa] dark:b-b-[#1e1e1e];

  top: -15px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.iu-tooltip-arrow.right {
  --iu-apply: b-transparent b-r-[#fafafa] dark:b-r-[#1e1e1e];

  top: 50%;
  left: -15px;
  transform: translate3d(0, -50%, 0);
}

.iu-tooltip-arrow.top {
  --iu-apply: b-transparent b-t-[#fafafa] dark:b-t-[#1e1e1e];

  bottom: -15px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tooltip-leave-from,
.tooltip-enter-to {
  transition: opacity 0.1s ease;
}
</style>
