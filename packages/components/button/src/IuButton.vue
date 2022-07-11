<script setup lang="ts">
// 用来测试
interface IProps {
  type: 'primary' | 'warning' | 'success' | 'error'

}
withDefaults(defineProps<IProps>(), {
  type: 'primary',
})
</script>

<template>
  <button class="i-button" :class="`i-button-${type}`">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.i-button {
  --i-apply:
    in-flex-center px-4 py-1 rounded bg-teal-700 text-white cursor-pointer align-middle
    hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50;
}

.i-button-primary {
  --i-apply: bg-[#1abc9c] hover:bg-[#16a085] active:bg-[#006266];
}

.i-button-warning {
  --i-apply: bg-[#ffa502] hover:bg-[#de9002] active:bg-[#ad7001];
}

.i-button-success {
  --i-apply: bg-[#2ecc71] hover:bg-[#27ad60] active:bg-[#1e874b];
}

.i-button-error {
  --i-apply: bg-[#ee5a24] hover:bg-[#cc4d1f] active:bg-[#a84019];
}
</style>
