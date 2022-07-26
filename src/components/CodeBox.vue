<script setup lang="ts">
import Prism from 'prismjs'

defineProps<{
  title?: string
  code: string
}>()
const showCode = ref(false)
const type = 'markup'

onMounted(() => {
  // Prism.highlightAll()
})
</script>

<template>
  <div>
    <IuCard hoverable :title="title">
      <slot />
      <template #extra>
        <div
          v-tooltip.top="showCode ? '隐藏代码' : '显示代码'"
          class="code-icon"
          @click="showCode = !showCode"
        >
          <div v-if="showCode" class="code-icon-btn i-carbon-code-hide" />
          <div v-else class="code-icon-btn i-carbon-code" />
        </div>
      </template>
      <template v-if="code" #footer>
        <IuCollapseTransition>
          <div v-show="showCode" class="code-area">
            <pre flex w-full>
              <code :class="`language-${type}`" v-html="Prism.highlight(code, Prism.languages[type], type)" />
            </pre>
          </div>
        </IuCollapseTransition>
      </template>
      <template #action>
        <div
          v-tooltip.top="showCode ? '隐藏代码' : '显示代码'"
          class="code-icon"
          @click="showCode = !showCode"
        >
          <div v-if="showCode" class="code-icon-btn i-carbon-code-hide" />
          <div v-else class="code-icon-btn i-carbon-code" />
        </div>
      </template>
    </IuCard>
  </div>
</template>

<style scoped lang="scss">
.code-icon {
  --iu-apply:
    flex-center py-5px cursor-pointer
    transition duration-200 ease-in-out
    hover:opacity-100 hover:text-teal-500;
}

.code-icon-btn {
  --iu-apply: inline-block select-none;
}

.code-area {
  --iu-apply: flex pt-10px b-t-1px b-[#efeff5] dark:b-[#fff] dark:b-opacity-10;

  // animation: fadeDown 0.2s ease-in-out;
}

// @keyframes fadeDown {
//   0% {
//     transform: scaleY(0.8) translateY(-4px);
//     opacity: 0.8;
//   }

//   100% {
//     transform: scaleY(0.9999) translateY(0);
//     opacity: 1;
//   }
// }
</style>
