<template>
  <main class="flex-center flex-col py-10 px-4 text-gray-700 dark:text-gray-200">
    <Starport port="iu-ui" w-121px h-45px>
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
