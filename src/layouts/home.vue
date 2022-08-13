<template>
  <main class="flex-center flex-col pt-30 text-gray-700 dark:text-gray-200">
    <Starport port="iu-ui" w-121px h-45px z-1000>
      <IuName />
    </Starport>

    <div flex justify-center>
      <Starport port="menu" w-100px h-50px>
        <HeadNav />
      </Starport>
    </div>
    <RouterView />
  </main>
</template>
