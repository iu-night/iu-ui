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

<style lang="scss">
.iu-tooltip {
  --iu:
    fixed inline-block rounded-5px pointer-events-none break-words
    top-0 left-0 z-1000 min-w-10px
    p-10px font-500 text-12px
    text-gray-700 bg-[#eaeaea]
    dark:text-gray-200 dark:bg-[#4e4e4e];

  line-height: 1.2;
}

.iu-tooltip-arrow {
  --iu:
    b-transparent b-l-[#eaeaea] dark:b-l-[#4e4e4e]
    absolute w-0 h-0 b-8px;
}

.iu-tooltip-arrow.left {
  --iu:
    b-transparent b-l-[#eaeaea] dark:b-l-[#4e4e4e]
    top-1/2 -right-15px;

  transform: translate3d(0, -50%, 0);
}

.iu-tooltip-arrow.bottom {
  --iu:
    b-transparent b-b-[#eaeaea] dark:b-b-[#4e4e4e]
    -top-15px left-1/2;

  transform: translate3d(-50%, 0, 0);
}

.iu-tooltip-arrow.right {
  --iu:
    b-transparent b-r-[#eaeaea] dark:b-r-[#4e4e4e]
    top-1/2 -left-15px;

  transform: translate3d(0, -50%, 0);
}

.iu-tooltip-arrow.top {
  --iu:
    b-transparent b-t-[#eaeaea] dark:b-t-[#4e4e4e]
    -bottom-15px left-1/2;

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
