<script setup lang="ts">
// import Prism from 'prismjs'
import type { CSSProperties } from 'vue'
import { highlight, languages } from 'prismjs'

const props = defineProps({
  title: String,
  code: {
    type: String,
    default: '',
  },
})

const outCodeRef = shallowRef<HTMLElement | null>(null)
const codeRef = shallowRef<HTMLElement | null>(null)

const showCode = ref(false)
const lang = 'markup'

const style = computed<CSSProperties>(() => {
  if (showCode.value) {
    const height = outCodeRef?.value?.firstElementChild?.nextElementSibling?.clientHeight
    return { height: height ? `${height + 37}px` : 'auto' }
  }
  return { height: 0 }
})

onMounted(() => {
  if (codeRef.value)
    codeRef.value.innerHTML = highlight(props.code, languages[lang], lang)
})

watch(
  () => [props.code, codeRef],
  ([value, _coderef]) => {
    if (value) {
      if (codeRef.value)
        codeRef.value.innerHTML = highlight(props.code, languages[lang], lang)
    }
  },
)
</script>

<template>
  <div>
    <IuCard hoverable :title="title" :bordered="false">
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
      <template #footer>
        <div v-show="code" ref="outCodeRef" class="code-area" :style="style">
          <IuDivider />
          <pre class="flex w-full language-markup">
            <code ref="codeRef" />
          </pre>
        </div>
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
  --iu-apply:
    overflow-hidden
    transition-height-300;
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
