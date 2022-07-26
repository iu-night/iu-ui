<script setup lang="ts">
// 用来测试
interface IProps {
  type?: 'default' | 'primary' | 'warning' | 'success' | 'error'

}
withDefaults(defineProps<IProps>(), {
  type: 'default',
})

const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
})

defineOptions({
  name: 'IuButton',
})

const pulse = ref(false)

const handleClick = (evt: MouseEvent) => {
  pulse.value = false

  requestAnimationFrame(() => {
    pulse.value = true
  })
  emit('click', evt)
}

const handleAnimationEnd = () => {
  pulse.value = false
}
</script>

<template>
  <button
    type="button"
    class="iu-button"
    :class="[`iu-button-${type}`, pulse ? `iu-button-pulse` : '']"
    @click="handleClick"
    @animationend="handleAnimationEnd"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@mixin pulse($pc0,$pc100) {
  animation-name: iu-button-pulse;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;

  @keyframes iu-button-pulse {
    0% {
      box-shadow: 0 0 1px 0 $pc0;
    }

    100% {
      box-shadow: 0 0 1px 6px $pc100;
    }
  }
}

.iu-button {
  --iu-apply:
    in-flex-center px-16px py-4px rounded-4px leading-normal cursor-pointer align-middle select-none text-[#222]
    disabled:cursor-no-drop disabled:hover:bg-gray-600 disabled:bg-gray-600 disabled:opacity-50
    disabled:active:bg-gray-600 dark:text-white;

  line-height: 1.5;
}

.iu-button-pulse {
  $pulse0: rgb(1 1 1 / 40%);
  $pulse100: rgb(1 1 1 / 0%);

  animation-name: iu-button-pulse;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;

  @keyframes iu-button-pulse {
    0% {
      box-shadow: 0 0 1px 0 $pulse0;
    }

    100% {
      box-shadow: 0 0 1px 4px $pulse100;
    }
  }

  // @include pulse($pulse0, $pulse100);
}

.dark .iu-button-pulse {
  $pulse0: rgb(222 222 222 / 60%);
  $pulse100: rgb(222 222 222 / 0%);

  animation-name: iu-button-pulse-dark;
  animation-duration: 800ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;

  @keyframes iu-button-pulse-dark {
    0% {
      box-shadow: 0 0 1px 0 $pulse0;
    }

    100% {
      box-shadow: 0 0 1px 6px $pulse100;
    }
  }

  // @include pulse($pulse0, $pulse100);
}

.iu-button-default {
  --iu-apply:
    b-1px b-[#efeff5]
    hover:b-[#cfcfcf]
    dark:b-[#fff] dark:b-opacity-10 dark:hover:b-opacity-50;
}

.iu-button-primary {
  --iu-apply: bg-[#1abc9c] hover:bg-[#16a085] active:bg-[#006266];
}

.iu-button-warning {
  --iu-apply: bg-[#ffa502] hover:bg-[#de9002] active:bg-[#ad7001];
}

.iu-button-success {
  --iu-apply: bg-[#2ecc71] hover:bg-[#27ad60] active:bg-[#1e874b];
}

.iu-button-error {
  --iu-apply: bg-[#ee5a24] hover:bg-[#cc4d1f] active:bg-[#a84019];
}
</style>
