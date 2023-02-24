<script setup lang="ts">
useHead({
  title: 'iu-vue',
  meta: [
    { name: 'description', content: 'Components based on Vue3' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <StarportCarrier>
    <RouterView />
  </StarportCarrier>
</template>
