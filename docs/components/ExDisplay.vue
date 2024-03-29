<script setup lang="ts">
const props = defineProps({
  title: String,
  name: String,
  comName: String,
})

// const example = shallowRef<Record<string, any> | null>(null)
let code = shallowRef<string>('')

const init = async () => {
  // example.value = markRaw(defineAsyncComponent(() => import(`./doc/${props.name}/${props.comName}.vue`)))
  code.value = (await import(`./doc/${props.name}/${props.comName}.vue?raw`)).default
}

onMounted(() => {
  init()
})
</script>

<template>
  <CodeBox class="min-w-550px 2xl:min-w-600px" :title="title" :code="code">
    <slot />
  </CodeBox>
</template>
