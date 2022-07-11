<template>
  <main class="text-gray-700 dark:text-gray-200">
    <Header />
    <div class="flex">
      <SideBar class="h-[calc(100vh-51px)] fixed b-r-[#ebebeb] b-r-1px dark:b-r-[#282828]" />
      <RouterView v-slot="{ Component }" class="ml-300px">
        <Transition name="fade" mode="out-in">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
    </div>
  </main>
</template>
