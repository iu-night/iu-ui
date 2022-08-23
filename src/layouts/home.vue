<script setup lang="ts">
const store = useStore()
const disabled = $computed(() => store.disableJump)

const target = ref(null)
const parallax = reactive(useParallax(target))

const specialStyle = computed(() => {
  if (disabled) {
    return {
      transition: '.3s ease-out all',
      transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
    }
  }
  else {
    return {
      transition: '.3s ease-out all',
    }
  }
})
</script>

<template>
  <main ref="target" class="flex-center flex-col h-full text-gray-700 dark:text-gray-200 perspective-300">
    <Starport port="iu-ui" w-121px h-45px z-1000>
      <IuName />
    </Starport>

    <div flex justify-center>
      <Starport port="menu" w-100px h-50px>
        <HeadNav />
      </Starport>
    </div>
    <RouterView :style="specialStyle" />
  </main>
</template>
