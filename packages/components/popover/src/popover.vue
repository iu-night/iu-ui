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
  --iu: inline-block;

  .iu-trigger {
    --iu: text-0;

    & > div {
      --iu: text-14px;
    }
  }
}
</style>
