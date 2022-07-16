<script setup lang="ts">
// 用来测试
interface IProps {
  type?: 'primary' | 'warning' | 'success' | 'error'

}
withDefaults(defineProps<IProps>(), {
  type: 'primary',
})

defineOptions({
  name: 'IuButton',
})
</script>

<template>
  <button class="iu-button" :class="`iu-button-${type}`">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.iu-button {
  --i-apply:
    in-flex-center px-4 py-1 rounded bg-teal-700 text-white cursor-pointer align-middle select-none
    hover:bg-teal-800
    disabled:cursor-no-drop disabled:hover:bg-gray-600 disabled:bg-gray-600 disabled:opacity-50
    disabled:active:bg-gray-600;
}

.iu-button-primary {
  --i-apply: bg-[#1abc9c] hover:bg-[#16a085] active:bg-[#006266];
}

.iu-button-warning {
  --i-apply: bg-[#ffa502] hover:bg-[#de9002] active:bg-[#ad7001];
}

.iu-button-success {
  --i-apply: bg-[#2ecc71] hover:bg-[#27ad60] active:bg-[#1e874b];
}

.iu-button-error {
  --i-apply: bg-[#ee5a24] hover:bg-[#cc4d1f] active:bg-[#a84019];
}
</style>
