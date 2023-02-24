<script setup lang="ts">
import { checkboxProps } from './checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const className = computed(() => {
  return {
    'iu-checkbox-checked': value.value,
    'iu-checkbox-disabled': props.disabled,
    'iu-checkbox-round': props.round,
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
  name: 'IuCheckbox',
})
</script>

<template>
  <div class="iu-checkbox" :class="className" @click="handleClick">
    <span class="iu-checkbox-icon" />
    <template v-if="$slots.default">
      <span class="iu-checkbox-label">
        <slot />
      </span>
    </template>
  </div>
</template>

<style lang="scss">
.iu-checkbox {
  --iu:
    relative
    inline-flex items-center
    leading-none text-14px
    text-[#000]:90 dark:text-[#fff]:90
    box-border
    cursor-pointer select-none;

  &.iu-checkbox-disabled {
    --iu: cursor-not-allowed opacity-50;
  }

  &:hover .iu-checkbox-icon {
    --iu: bg-[#000]:40 dark:bg-[#fff]:40;
  }

  // &.iu-checkbox-checked:hover .iu-checkbox-icon {
  //   background-color: v-bind(color);
  // }
}

.iu-checkbox-icon {
  --iu:
    relative
    inline-flex
    w-18px h-18px
    rounded-3px
    bg-[#000]:20 dark:bg-[#fff]:20
    transition-all-200;

  &::after {
    --iu:
      absolute
      opacity-0
      left-1/2
      content-none
      transition-all-200;

    top: calc(50% - 1px);
    width: calc(18px * 0.25 + 0.5px);
    height: 9px;
    border-color: v-bind(checkColor);
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg) scale(2);
  }
}

.iu-checkbox-round {
  & .iu-checkbox-icon {
    --iu: rounded-1/2;
  }
}

.iu-checkbox-checked {
  & .iu-checkbox-icon,
  &.iu-checkbox:hover .iu-checkbox-icon {
    background-color: v-bind(color);
  }

  & .iu-checkbox-icon::after {
    transform: translate(-50%, -50%) rotate(45deg) scale(1);
    opacity: 1;
  }
}

.iu-checkbox-label {
  --iu: ml-5px;
}
</style>
