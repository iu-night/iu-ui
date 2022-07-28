<template>
  <main class="text-gray-700 dark:text-gray-200">
    <Header />
    <div class="flex h-100vh">
      <SideBar />
      <div
        class="bg-[#fafafa] ml-250px px-40px pt-55px pb-40px w-[calc(100%-251px)] overflow-x-hidden crollDivClass dark:bg-[#1e1e1e]"
      >
        <RouterView v-slot="{ Component }" class="">
          <Transition name="fade" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
      <IuBacktop target="crollDivClass" />
    </div>
  </main>
</template>
