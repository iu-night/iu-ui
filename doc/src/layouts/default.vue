<template>
  <div class="text-gray-700 dark:text-gray-200">
    <Header />
    <div class="flex flex-row flex-nowrap h-100vh">
      <SideBar />
      <main
        class="bg-[#fbfbfb]
        px-40px pt-55px pb-40px
        overflow-auto crollDivClass dark:bg-[#1e1e1e]
        flex-auto"
      >
        <RouterView v-slot="{ Component }" class="">
          <Transition name="fade-route" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>
      <!-- <IuBacktop target="#app" /> -->
      <!-- <IuBacktop /> -->
    </div>
  </div>
</template>
