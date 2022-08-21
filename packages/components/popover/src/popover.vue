<script setup lang="ts">
defineOptions({
  name: 'IuPopover',
})
</script>

<template>
  <div class="iu-popover">
    <div ref="triggerRef">
      <div class="iu-trigger">
        <slot name="trigger" />
      </div>
    </div>
    <div ref="contentRef">
      <!-- <slot name="popover-body" :show="show" :hide="hide" /> -->
      <slot name="content" />
    </div>
  </div>
</template>

<style lang="scss">
.iu-popover {
  --iu-apply: inline-block;

  .iu-trigger {
    --iu-apply: text-0;

    & > div {
      --iu-apply: text-14px;
    }
  }
}
</style>
