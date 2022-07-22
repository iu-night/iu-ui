<template>
  <main class="text-gray-700 dark:text-gray-200">
    <Header />
    <div class="flex">
      <SideBar class="h-[calc(100vh-51px)] fixed b-r-[#ebebeb] b-r-1px dark:b-r-[#282828]" />
      <div
        class="bg-[#fafafa] h-[calc(100vh-51px)] ml-251px px-40px pb-40px w-[calc(100%-251px)] overflow-x-hidden dark:bg-[#1e1e1e]"
      >
        <RouterView v-slot="{ Component }" class="">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </main>
</template>
