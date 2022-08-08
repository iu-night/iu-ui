<script setup lang="ts">
import { cardProps } from './card'
defineProps(cardProps)

defineOptions({
  name: 'IuCard',
})
</script>

<template>
  <div
    class="iu-card"
    :class="{
      'iu-card-hover': hoverable,
      'iu-card-bordered': bordered,
    }"
  >
    <div v-if="$slots.header || title" class="iu-card-header">
      <div class="iu-card-header-main">
        <slot name="header">
          {{ title }}
        </slot>
      </div>
      <div class="iu-card-header-extra">
        <slot name="extra" />
      </div>
    </div>
    <div class="iu-card-content">
      <slot />
    </div>
    <div v-if="$slots.footer" class="iu-card-footer">
      <slot name="footer" />
    </div>
    <div v-if="$slots.action" class="iu-card-action">
      <slot name="action" />
    </div>
  </div>
</template>

<style lang="scss">
.iu-card {
  --iu-apply:
    flex flex-col w-full text-16px rounded box-border break-words leading-normal
    text-gray-700 dark:text-gray-200
    bg-[#fff] dark:bg-[#121212];
  --i-bezier: cubic-bezier(0.4, 0, 0.2, 1);

  transition:
    color 0.3s var(--i-bezier),
    background-color 0.3s var(--i-bezier),
    box-shadow 0.3s var(--i-bezier),
    border-color 0.3s var(--i-bezier),
    height 0.3s var(--i-bezier);
}

.iu-card-bordered {
  --iu-apply: b-1px b-[#efeff5] dark:b-[#fff]:10;
}

.iu-card-hover:hover {
  box-shadow:
    0 1px 2px -2px rgb(0 0 0 / 8%),
    0 3px 6px 0 rgb(0 0 0 / 6%),
    0 5px 12px 4px rgb(0 0 0 / 4%)
}

.dark .iu-card-hover:hover {
  box-shadow:
    0 1px 2px -2px rgb(255 255 255 / 8%),
    0 3px 6px 0 rgb(255 255 255 / 6%),
    0 5px 12px 4px rgb(255 255 255 / 4%)
}

.iu-card-header {
  --iu-apply: flex items-center px-20px py-10px text-20px font-500 box-border;
}

.iu-card-header-main {
  --iu-apply: flex-1 items-center;
}

.iu-card-header-extra {
  --iu-apply: flex items-center text-16px;
}

.iu-card-content {
  --iu-apply: flex-1 px-20px py-10px box-border;
}

.iu-card-footer {
  --iu-apply: flex-1 px-20px py-10px box-border;
}

.iu-card-action {
  --iu-apply: flex-1 px-20px py-10px box-border bg-[#efefef] dark:bg-[#252525];
}
</style>
