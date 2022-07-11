<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <Header />
    <!-- sidebar -->
    <!-- main-view -->
    <div class="flex">
      <SideBar class="h-[calc(100vh-60px)] fixed b-r-[#ebebeb] b-r-1px dark:b-r-[#282828]" />
      <RouterView class="ml-300px" />
    </div>
  </main>
</template>
