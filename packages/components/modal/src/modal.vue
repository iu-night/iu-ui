<script setup lang="ts">
import { modalProps } from './modal'

const props = defineProps(modalProps)
const emit = defineEmits(['update:show'])

const close = () => {
  emit('update:show', false)
}

defineOptions({
  name: 'IuModal',
})
</script>

<template>
  <Teleport to="body">
    <Transition name="iu-modal">
      <div v-if="show" class="iu-modal-mask" @click="close">
        <div class="iu-modal-wrapper">
          <div class="iu-modal-container">
            <div v-if="$slots.header" class="iu-modal-header">
              <slot name="header" />
            </div>
            <div class="iu-modal-body">
              <slot />
            </div>
            <div v-if="$slots.footer" class="iu-modal-footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.iu-modal-mask {
  --iu-apply:
    fixed flex
    top-0 left-0 z-9988
    w-full h-full
    transition-opacity-300
    bg-black:40 dark:bg-white:10
    backdrop-blur-5px backdrop-saturate-50;

  // & > * {
  //   --iu-apply: backdrop-blur-0;
  // }
}

.iu-modal-wrapper {
  --iu-apply: flex-center w-full h-full;
}

.iu-modal-container {
  --iu-apply:
    flex
    px-30px py-20px
    rounded-4px
    text-16px text-gray-700 dark:text-gray-200
    bg-white dark:bg-[#222]
    transition-300
    shadow-iu dark:shadow-iud;
}

.iu-modal-header {
  --iu-apply: flex-1;
}

.iu-modal-body {
  --iu-apply: flex-1 my-20px;
}

.iu-modal-enter-from,
.iu-modal-leave-to {
  opacity: 0;
}

.iu-modal-enter-from .iu-modal-container,
.iu-modal-leave-to .iu-modal-container {
  transform: scale(1.1);
}
</style>
