<script setup lang="ts">
import { buttonProps } from './button'

const props = defineProps(buttonProps)

const emit = defineEmits({
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
})

defineOptions({
  name: 'IuButton',
})

const pulse = ref(false)

const buttonTypeClass = computed(() => {
  if (props.disabled)
    return 'iu-button-disabled'
  else
    return props.type ? `iu-button-${props.type}` : ''
})

const pulseClass = computed(() => {
  if (pulse.value)
    return `iu-button-pulse-${props.type}`
})

const className = computed(() => {
  return [
    buttonTypeClass.value,
    pulseClass.value,
    {
      'iu-button-round': props.round,
    }]
})

const handleClick = (evt: MouseEvent) => {
  if (props.disabled)
    return
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
    :class="className"
    @click="handleClick"
    @animationend="handleAnimationEnd"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.iu-button {
  --iu:
    in-flex-center align-middle
    text-white
    px-16px py-4px
    rounded-4px leading-normal
    cursor-pointer select-none
    transition-background-color-300;
}

.iu-button-disabled {
  --iu: cursor-not-allowed bg-gray-400 opacity-50 dark:bg-gray-600;
}

.iu-button-round {
  --iu: rounded-16px;
}

.iu-button-default {
  --iu:
    bg-zinc-400 hover:bg-zinc-500
    dark:bg-zinc-600 dark:hover:bg-zinc-500;
}

.iu-button-primary {
  --iu:
    bg-teal-500 hover:bg-teal-600 active:bg-teal-500
    dark:bg-teal-600 dark:hover:bg-teal-500 dark:active:bg-teal-600;
}

.iu-button-warning {
  --iu:
    bg-amber-500 hover:bg-amber-600 active:bg-amber-500
    dark:bg-amber-600 dark:hover:bg-amber-500 dark:active:bg-amber-600;
}

.iu-button-success {
  --iu:
    bg-green-500 hover:bg-green-600 active:bg-green-500
    dark:bg-green-600 dark:hover:bg-green-500 dark:active:bg-green-600;
}

.iu-button-error {
  --iu:
    bg-red-500 hover:bg-red-600 active:bg-red-500
    dark:bg-red-600 dark:hover:bg-red-500 dark:active:bg-red-600;
}

.iu-button-pulse-default {
  --pulse-c-0: rgb(1 1 1 / 40%);
  --pulse-c-1: rgb(1 1 1 / 0%);

  animation: 0.8s ease 1 iu-button-pulse;

  .dark & {
    --pulse-c-0: rgb(222 222 222 / 60%);
    --pulse-c-1: rgb(222 222 222 / 0%);
  }
}

.iu-button-pulse-primary {
  --pulse-c-0: rgb(94 234 212 / 80%);
  --pulse-c-1: rgb(94 234 212 / 0%);

  animation: 0.8s ease 1 iu-button-pulse;
}

.iu-button-pulse-warning {
  --pulse-c-0: rgb(252 211 77 / 80%);
  --pulse-c-1: rgb(252 211 77 / 0%);

  animation: 0.8s ease 1 iu-button-pulse;
}

.iu-button-pulse-success {
  --pulse-c-0: rgb(134 239 172 / 80%);
  --pulse-c-1: rgb(134 239 172 / 0%);

  animation: 0.8s ease 1 iu-button-pulse;
}

.iu-button-pulse-error {
  --pulse-c-0: rgb(252 165 165 / 80%);
  --pulse-c-1: rgb(252 165 165 / 0%);

  animation: 0.8s ease 1 iu-button-pulse;
}

@keyframes iu-button-pulse {
  0% {
    box-shadow: 0 0 1px 0 var(--pulse-c-0);
  }

  100% {
    box-shadow: 0 0 1px 4px var(--pulse-c-1);
  }
}
</style>
