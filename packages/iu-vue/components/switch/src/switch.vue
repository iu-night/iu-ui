<script setup lang="ts">
import { switchProps } from './switch'

const props = defineProps(switchProps)
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const left = computed(() => value.value ? '20px' : '2px')

const className = computed(() => {
  return {
    'iu-switch-active': value.value,
    'iu-switch-square': !props.round,
    'iu-switch-disabled': props.disabled,
  }
})

const handleClick = () => {
  if (props.disabled)
    return
  if (value.value)
    value.value = false
  else
    value.value = true
}

defineOptions({
  name: 'IuSwitch',
})
</script>

<template>
  <div class="iu-switch" @click="handleClick">
    <div
      class="iu-switch-rail"
      :class="className"
    >
      <div class="iu-switch-btn">
        <div v-if="$slots.icon">
          <slot name="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.iu-switch {
  --iu:
    in-flex-center align-middle
    leading-normal
    select-none
    h-22px min-w-40px;

  outline: none;
}

.iu-switch-rail {
  --iu:
    overflow-hidden relative
    bg-black:20
    dark:bg-white:20
    rounded-11px
    h-22px min-w-40px
    cursor-pointer;
  --iu-bezier: cubic-bezier(0.4, 0, 0.2, 1);

  transition:
    border-radius 0.3s var(--iu-bezier),
    opacity 0.3s var(--iu-bezier),
    background 0.3s var(--iu-bezier),
    box-shadow 0.3s var(--iu-bezier);

  &.iu-switch-square {
    --iu: rounded-4px;
  }

  &.iu-switch-disabled {
    --iu: cursor-not-allowed opacity-50;
  }
}

.iu-switch-active {
  background-color: v-bind(color);

  .dark & {
    background-color: v-bind(color);
  }
}

.iu-switch-btn {
  --iu:
    absolute
    bg-white
    rounded-1/2 box-border
    shadow-switch
    cursor-inherit
    top-2px
    h-18px w-18px;
  --iu-bezier: cubic-bezier(0.4, 0, 0.2, 1);

  left: v-bind(left);
  transition:
    border-radius 0.3s var(--iu-bezier),
    background-color 0.3s var(--iu-bezier),
    left 0.3s var(--iu-bezier),
    opacity 0.3s var(--iu-bezier),
    max-width 0.3s var(--iu-bezier),
    box-shadow 0.3s var(--iu-bezier);

  .iu-switch-square & {
    --iu: rounded-4px;
  }
}
</style>
