<script setup lang="ts">
const props = defineProps({
  title: String,
  name: String,
  comName: String,
  port: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: '50px',
  },
  width: {
    type: String,
    default: '300px',
  },
})

// const example = shallowRef<Record<string, any> | null>(null)
const code = shallowRef<string>('')

const style = computed(() => {
  return {
    height: props.height,
    width: props.width,
  }
})

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
    <template v-if="port">
      <Starport :port="`iu-${name}`" :style="style">
        <slot />
      </Starport>
    </template>
    <template v-else>
      <slot />
    </template>
  </CodeBox>
</template>
