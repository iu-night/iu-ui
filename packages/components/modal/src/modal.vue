<script setup lang="ts">
import { modalProps } from './modal'

const props = defineProps(modalProps)
const emit = defineEmits(['update:show'])

const maskClose = () => {
  if (props.maskClose)
    emit('update:show', false)
}

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
      <div v-if="show" class="iu-modal-mask">
        <div class="iu-modal-wrapper" @click.stop="maskClose">
          <div class="iu-modal-container" @click.stop>
            <div class="iu-modal-close" @click.stop="close">
              <div i-carbon-close />
            </div>
            <div v-if="$slots.header || title" class="iu-modal-header">
              <slot name="header">
                <span class="iu-modal-title">{{ title }}</span>
              </slot>
            </div>
            <div class="iu-modal-body">
              <slot />
            </div>
            <div v-if="$slots.footer" class="iu-modal-footer">
              <slot name="footer" />
            </div>
            <div v-if="$slots.action" class="iu-modal-action">
              <slot name="action" />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.iu-modal-mask {
  --iu:
    fixed flex
    top-0 left-0 z-9988
    w-full h-full
    transition-opacity-300
    bg-black:40 dark:bg-white:10
    backdrop-blur-5px backdrop-saturate-50;

  // & > * {
  //   --iu: backdrop-blur-0;
  // }
}

.iu-modal-wrapper {
  --iu: flex-center w-full h-full;
}

.iu-modal-container {
  --iu:
    flex flex-col relative
    rounded-4px
    text-16px text-gray-700 dark:text-gray-200
    bg-white dark:bg-[#222]
    transition-300
    shadow-iu dark:shadow-iud;
}

.iu-modal-close {
  --iu:
    absolute
    right-0 top-0
    mt-20px mr-25px
    rounded-4px
    text-20px
    cursor-pointer
    transition-100;

  &:hover {
    --iu: bg-[#000]:20 dark:bg-[#fff]:20;
  }
}

.iu-modal-header {
  --iu:
    flex-1
    rounded-4px
    px-30px py-20px;

  .iu-modal-title {
    --iu: text-20px;
  }
}

.iu-modal-body {
  --iu:
    flex-1
    rounded-4px
    px-30px pt-10px pb-20px;
}

.iu-modal-footer {
  --iu:
    flex-1
    rounded-4px
    px-30px pb-20px;
}

.iu-modal-action {
  --iu:
    flex-1
    rounded-4px
    px-30px py-20px
    bg-[#efefef] dark:bg-[#424242];
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
