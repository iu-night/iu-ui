<script setup lang="ts">
const store = useStore()
const disabled = $computed(() => store.disableJump)

const target = ref(null)
const parallax = reactive(useParallax(target))

let showStar = $ref(isDark.value)
let timer: NodeJS.Timeout

const toggleStar = () => {
  showStar = !showStar
}

const toogleStarTimeOut = () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    toggleStar()
  }, 5000)
}

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

watch(
  () => isDark.value,
  (val) => {
    if (val) {
      toggleStar()
      toogleStarTimeOut()
    }
    else {
      showStar = false
      clearTimeout(timer)
    }
  },
)

onMounted(() => {
  if (isDark.value)
    toogleStarTimeOut()
})
</script>

<template>
  <main ref="target" class="flex-center flex-col h-full text-gray-700 dark:text-gray-200">
    <Transition name="fade-star" mode="out-in">
      <Starfield v-if="isDark" class="transition-opacity-2000" :class="{ 'opacity-0': !showStar }" />
    </Transition>
    <Starport port="iu-ui" w-121px h-45px relative z-1000>
      <IuName />
    </Starport>

    <div flex justify-center>
      <Starport port="menu" w-100px h-50px>
        <HeadNav />
      </Starport>
    </div>

    <div class="perspective-300">
      <RouterView :style="specialStyle" />
    </div>
  </main>
</template>
