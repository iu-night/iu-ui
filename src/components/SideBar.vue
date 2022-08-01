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
        name: 'Start',
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
        name: 'Button',
        route: `${com}button`,
        tips: '',
      },
      {
        title: '卡片',
        name: 'Card',
        route: `${com}card`,
        tips: '',
      },
    ],
  },
  {
    title: '数据',
    items: [
      {
        title: '开关',
        name: 'Switch',
        route: `${com}switch`,
        tips: '',
      },
    ],
  },
  {
    title: '反馈',
    items: [
      {
        title: '文字提示',
        name: 'Tooltip',
        route: `${com}tooltip`,
        tips: '',
      },
    ],
  },
  {
    title: '布局',
    items: [
      {
        title: '回到顶部',
        name: 'Backtop',
        route: `${com}backtop`,
        tips: '',
      },
      {
        title: '间距',
        name: 'Space',
        route: `${com}space`,
        tips: '',
      },
    ],
  },
]
</script>

<template>
  <div class="iu-side-bar">
    <div class="px-20px w-250px">
      <div v-for="(list, listIndex) in sideItems" :key="list.title">
        <div class="side-title">
          {{ list.title }}
        </div>
        <RouterLink v-for="(item, index) in list.items" :key="item.name" :to="item.route">
          <div
            class="side-btn"
            :class="{ 'side-btn-active': $route.path === item.route }"
            :style="`animation-delay: ${(listIndex * 5 + index) * 25}ms;`"
          >
            <div flex-1>
              {{ item.title }}
            </div>
            <div text-14px opacity-70>
              {{ item.name }}
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.iu-side-bar {
  --iu-apply:
    h-full pt-55px fixed z-888
    shadow-iu dark:shadow-iud;
}

.side-title {
  @apply flex h-40px mt-10px opacity-60 pl-20px items-center;
}

.side-btn {
  @apply flex rounded-5px h-40px mt-10px opacity-0 pr-10px pl-30px items-center
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
  --iu-apply: bg-[#18a058] bg-opacity-10 text-teal-900 dark:text-teal dark:bg-teal-800;

  &:hover {
    --iu-apply: bg-[#18a058] bg-opacity-10 text-teal-900 dark:bg-teal-800;
  }
}
</style>
