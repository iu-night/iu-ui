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

let isCollapsed = $ref(false)

let sideBarStyle = $computed(() => {
  if (isCollapsed) {
    return {
      transform: 'translate3d(0, 0, 0)',
    }
  }
})

let sideBarBtnStyle = $computed(() => {
  if (isCollapsed) {
    return {
      left: '255px',
    }
  }
})

const setCollapsed = () => {
  if (isCollapsed)
    isCollapsed = false
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
        title: '复选框',
        name: 'Checkbox',
        route: `${com}checkbox`,
        tips: '',
      },
      {
        title: '输入框',
        name: 'Input',
        route: `${com}input`,
        tips: '',
      },
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
        title: '加载',
        name: 'Loading',
        route: `${com}loading`,
        tips: '',
      },
      {
        title: '模态框',
        name: 'Modal',
        route: `${com}modal`,
        tips: '',
      },
      {
        title: '弹出提示',
        name: 'Popover',
        route: `${com}popover`,
        tips: '',
      },
      // {
      //   title: '文字提示',
      //   name: 'Tooltip',
      //   route: `${com}tooltip`,
      //   tips: '',
      // },
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
        title: '分割线',
        name: 'Divider',
        route: `${com}divider`,
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
  <aside>
    <div class="iu-side-bar" :style="sideBarStyle">
      <div v-for="(list, listIndex) in sideItems" :key="list.title">
        <div class="side-title">
          {{ list.title }}
        </div>
        <RouterLink v-for="(item, index) in list.items" :key="item.name" :to="item.route" @click="setCollapsed">
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
    <div class="iu-side-bar-btn" :style="sideBarBtnStyle" @click="isCollapsed = !isCollapsed">
      <div v-if="!isCollapsed" i-carbon-chevron-right />
      <div v-else i-carbon-chevron-left />
    </div>
  </aside>
</template>

<style scoped lang="scss">
.iu-side-bar {
  --iu:
    h-full w-250px
    pt-55px px-20px pb-40px
    flex flex-col shrink-0
    z-888 overflow-auto
    shadow-iu dark:shadow-iud
    bg-white dark:bg-[#121212]
    transition-transform;

  overflow: overlay;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: transparent;
  }
}

.iu-side-bar-btn {
  --iu:
    display-none
    rounded-1/2
    justify-center items-center
    w-30px h-30px z-999
    cursor-pointer select-none
    text-[#1e1e1e] dark:text-white
    shadow-backtop dark:shadow-backtopd
    bg-white dark:bg-[#414141]
    opacity-80 hover:opacity-100
    transition-left;
}

.side-title {
  --iu: flex h-40px mt-10px opacity-60 pl-20px items-center;
}

.side-btn {
  --iu:
    flex rounded-5px h-40px mt-10px opacity-0 pr-10px pl-30px items-center
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
  --iu: bg-[#18a058]:10 text-teal-900 dark:text-teal dark:bg-teal-800;

  &:hover {
    --iu: bg-[#18a058]:10 text-teal-900 dark:bg-teal-800;
  }
}

@media only screen and (max-width: 700px) {
  .iu-side-bar {
    --iu: fixed;

    transform: translate3d(-100%, 0, 0);
  }

  .iu-side-bar-btn {
    --iu: flex absolute top-55px left-5px;
  }
}
</style>
