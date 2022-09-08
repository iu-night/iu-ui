<script setup lang="ts">
import { inputEmits, inputProps } from './input'

type ValType = string | number | undefined

const props = defineProps(inputProps)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | undefined): void
  (e: 'input', value: string | number | undefined, evt: Event): void
  (e: 'change', value: string | number | undefined): void
  (e: 'pressEnter', evt: KeyboardEvent): void
  (e: 'clear', evt: MouseEvent): void
  (e: 'focus', evt: FocusEvent): void
  (e: 'blur', evt: FocusEvent): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const focused = ref<boolean>(false)
const showClear = ref<boolean>(false)
const showPwd = ref<boolean>(false)

const className = computed(() => {
  return [
    {
      'iu-input-focus': focused.value,
      'iu-input-round': props.round,
    },
    props.state === 'default' ? '' : `iu-input-${props.state}`,
  ]
})

const handleInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement
  emit('input', value, e)
}

const handleChange = () => {
  emit('change', value.value)
}

const handleKeyDown = (e: KeyboardEvent) => {
  const keyCode = e.key
  if (keyCode === 'Enter') {
    handleChange()
    emit('pressEnter', e)
  }
}

const handleClear = (event: FocusEvent) => {
  value.value = ''
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('focus', event)
}

defineOptions({
  name: 'IuInput',
})
</script>

<template>
  <div class="iu-input" :class="className">
    <template v-if="type !== 'textarea'">
      <input
        v-model="value"
        class="iu-input-el"
        :type="type"
        :placeholder="placeholder"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <div
        v-if="showClear"
        class="cursor-pointer op50 hover:op80 i-carbon-close-filled"
      />
    </template>
    <template v-else>
      <textarea
        v-model="value"
        :placeholder="placeholder"
        @input="handleInput"
      />
    </template>
  </div>
</template>

<style lang="scss">
.iu-input {
  --iu-apply:
    relative
    inline-flex items-center
    w-full h-32px
    px-8px py-4px
    b-[#ccc] dark:b-[#555]
    b-1px rounded-4px
    bg-white dark:bg-dark-300
    transition-250;

  &:hover {
    --iu-apply: b-teal-500 dark:b-teal-600;
  }
}

.iu-input-focus {
  --iu-apply: b-teal-500 dark:b-teal-600 caret-teal-500;
}

.iu-input-error {
  --iu-apply: b-red-500 dark:b-red-600 caret-red-500;

  &:hover {
    --iu-apply: b-red-500 dark:b-red-600;
  }
}

.iu-input-warning {
  --iu-apply: b-amber-500 dark:b-amber-600 caret-amber-500;

  &:hover {
    --iu-apply: b-amber-500 dark:b-amber-600;
  }
}

.iu-input-round {
  --iu-apply: rounded-15px px-10px;
}

.iu-input-el {
  --iu-apply:
    flex-1
    w-full
    p-0
    b-0
    bg-transparent
    placeholder-gray dark:placeholder-gray-500;

  &:focus-visible {
    outline: none;
  }
}
</style>
