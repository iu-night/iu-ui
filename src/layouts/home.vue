<template>
  <main class="text-center py-10 px-4 text-gray-700 dark:text-gray-200">
    <!-- <Header /> -->
    <div class="font-bold text-30px">
      IU-UI
    </div>
    <div class="font-bold text-30px">
      Home
    </div>
    <div flex justify-center>
      <Starport port="menu" w-141px h-50px transition-all duration-800>
        <HeadNav />
      </Starport>
    </div>
    <RouterView />
  </main>
</template>
