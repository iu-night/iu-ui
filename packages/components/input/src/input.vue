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

const handleChange = () => {
  emit('change', value.value)
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

defineOptions({
  name: 'IuInput',
})
</script>

<template>
  <div class="iu-input">
    <template v-if="type !== 'textarea'">
      <input v-model="value" @change="handleChange">
    </template>
    <template v-else>
      <textarea>
        <span></span>
      </textarea>
    </template>
  </div>
</template>

<style lang="scss">

</style>
