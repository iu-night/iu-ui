<script setup lang="ts">
interface ISideItems {
  title: string
  name: string
  route: string
  tips: string
}
interface ISideBar {
  title: string
  items: ISideItems[]
}
const com = '/components/'
const sideItems: ISideBar[] = [
  {
    title: '指南',
    items: [
      {
        title: '开始',
        name: 'start',
        route: '/guide/start',
        tips: '',
      },
    ],
  },
  {
    title: '基础',
    items: [
      {
        title: '按钮',
        name: 'button',
        route: `${com}button`,
        tips: '',
      },
    ],
  },
]
</script>

<template>
  <div>
    <div class="px-20px w-250px">
      <div v-for="(list, listIndex) in sideItems" :key="list.title">
        <div class="side-title">
          {{ list.title }}
        </div>
        <RouterLink v-for="(item, index) in list.items" :key="item.title" :to="item.route">
          <div
            class="side-btn"
            :class="{ 'side-btn-active': $route.path === item.route }"
            :style="`animation-delay: ${(listIndex * 5 + index) * 25}ms;`"
          >
            {{ item.title }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-title {
  @apply flex h-40px mt-10px opacity-60 pl-20px items-center;
}

.side-btn {
  @apply flex rounded-5px h-40px mt-10px opacity-0 pl-30px items-center
    hover:bg-gray-100 hover:text-teal-900 dark:hover:bg-gray-700
    dark:hover:text-teal;

  animation: slideIn 0.75s ease;
  animation-fill-mode: forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.side-btn-active {
  --i-apply: bg-[#18a058] bg-opacity-10 text-teal-900 dark:text-teal dark:bg-teal-800;

  &:hover {
    --i-apply: bg-[#18a058] bg-opacity-10 text-teal-900 dark:bg-teal-800;
  }
}
</style>
