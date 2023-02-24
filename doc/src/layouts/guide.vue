<template>
  <main class="text-center py-5 px-4 text-gray-700 dark:text-gray-200">
    <Header />
    <div class="flex">
      <div class="h-[calc(100vh-60px)] fixed">
        guide-side
      </div>
      <RouterView class="ml-100px" />
    </div>
  </main>
</template>
