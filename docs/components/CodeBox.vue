<script setup lang="ts">
import type { CSSProperties } from 'vue'
import prismjs from 'prismjs'

const { code = '' } = defineProps({
  title: String,
  code: {
    type: String,
    default: '',
  },
})

const { highlight, languages } = prismjs

let outCodeRef = shallowRef<HTMLElement | null>(null)
let codeRef = shallowRef<HTMLElement | null>(null)

let showCode = ref(false)
const lang = 'markup'

const codeText = computed(() => showCode.value ? '隐藏代码' : '显示代码')

const style = computed<CSSProperties>(() => {
  if (showCode.value) {
    const height = outCodeRef.value?.firstElementChild?.nextElementSibling?.clientHeight
    return { height: height ? `${height + 37}px` : 'auto' }
  }
  return { height: 0 }
})

onMounted(() => {
  if (codeRef.value)
    codeRef.value.innerHTML = highlight(code, languages[lang], lang)
})

watch(
  () => [code, codeRef],
  ([value, _coderef]) => {
    if (value) {
      if (codeRef.value)
        codeRef.value.innerHTML = highlight(code, languages[lang], lang)
    }
  },
)
</script>

<template>
  <div>
    <IuCard hoverable :title="title" :bordered="false">
      <slot />
      <template #extra>
        <IuPopover>
          <template #trigger>
            <div
              class="code-icon"
              @click="showCode = !showCode"
            >
              <div v-if="showCode" class="code-icon-btn i-carbon-code-hide" />
              <div v-else class="code-icon-btn i-carbon-code" />
            </div>
          </template>
          <span text-14px>{{ codeText }}</span>
        </IuPopover>
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
        <IuPopover>
          <template #trigger>
            <div
              class="code-icon"
              @click="showCode = !showCode"
            >
              <div v-if="showCode" class="code-icon-btn i-carbon-code-hide" />
              <div v-else class="code-icon-btn i-carbon-code" />
            </div>
          </template>
          <span text-14px>{{ codeText }}</span>
        </IuPopover>
      </template>
    </IuCard>
  </div>
</template>

<style scoped lang="scss">
.code-icon {
  --iu:
    flex-center py-5px cursor-pointer
    transition duration-200 ease-in-out
    hover:opacity-100 hover:text-teal-500;
}

.code-icon-btn {
  --iu: inline-block select-none;
}

.code-area {
  --iu:
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
