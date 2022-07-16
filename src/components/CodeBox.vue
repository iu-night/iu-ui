<script setup lang="ts">
defineProps<{
  title?: string
  code?: string
}>()
const showCode = ref(false)
</script>

<template>
  <div>
    <IuCard hoverable :title="title">
      <slot />
      <template #extra>
        <div class="code-icon" :title="showCode ? '隐藏代码' : '显示代码'" @click="showCode = !showCode">
          <div v-if="showCode" class="code-icon-btn i-carbon-code-hide" />
          <div v-else class="code-icon-btn i-carbon-code" />
        </div>
      </template>
      <template #footer>
        <div v-if="showCode && code" class="code-area">
          <pre><code v-text="code" /></pre>
          <!-- code area -->
        </div>
      </template>
      <template #action>
        <div class="code-icon" :title="showCode ? '隐藏代码' : '显示代码'" @click="showCode = !showCode">
          <div v-if="showCode" class="code-icon-btn i-carbon-code-hide" />
          <div v-else class="code-icon-btn i-carbon-code" />
        </div>
      </template>
    </IuCard>
  </div>
</template>

<style scoped>
.code-icon {
  --i-apply:
    flex-center py-5px cursor-pointer
    transition duration-200 ease-in-out
    hover:opacity-100 hover:text-teal-500;
}

.code-icon-btn {
  --i-apply: inline-block select-none;
}

.code-area {
  --i-apply: flex py-10px b-t-1px b-[#efeff5] dark:b-[#fff] dark:b-opacity-10;

  animation: fadeDown 0.2s ease-in-out;
}

@keyframes fadeDown {
  0% {
    transform: scaleY(0.8) translateY(-4px);
    opacity: 0.8;
  }

  100% {
    transform: scaleY(0.9999) translateY(0);
    opacity: 1;
  }
}
</style>
