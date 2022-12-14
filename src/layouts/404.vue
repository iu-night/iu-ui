<template>
  <main h-full flex="~ col" p="x4 y4" text="center teal-700 dark:gray-200">
    <div class="cursor-pointer i-carbon-arrow-left" @click="$router.back()" />
    <RouterView />
  </main>
</template>
