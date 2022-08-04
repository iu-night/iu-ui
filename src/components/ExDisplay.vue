<script setup lang="ts">
const props = defineProps({
  title: String,
  name: String,
  comName: String,
})

// const example = shallowRef<Record<string, any> | null>(null)
const code = shallowRef<string>('')

const init = async () => {
  // example.value = markRaw(defineAsyncComponent(() => import(`./doc/${props.name}/${props.comName}.vue`)))
  code.value = (await import(`./doc/${props.name}/${props.comName}.vue?raw`)).default
}

onMounted(() => {
  init()
})
</script>

<template>
  <CodeBox w-500px :title="title" :code="code">
    <slot />
  </CodeBox>
</template>
