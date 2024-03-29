<script setup lang="ts">
const store = useStore()
const disabled = computed(() => store.disableJump)
const animate = computed(() => store.animate)
const setDis = (val: boolean) => {
  store.setDisable(val)
}
const setAnimate = (val: boolean) => {
  store.setAnimate(val)
}
</script>

<template>
  <div flex-center flex-col mt-30px relative z-1 class="someStyle">
    <!-- <div absolute top-40px right-40px font-bold>
      <IuCheckbox :modelValue="disabled" @update:modelValue="setDis">
        禁用跳转
      </IuCheckbox>
    </div> -->
    <div class="flex-center flex-col relative p-5px z-1 rounded-5px bg-white dark:bg-[#333]">
      <div mb-30px>
        <IuSpace>
          <IuCheckbox :modelValue="animate" @update:modelValue="setAnimate">
            开启动画
          </IuCheckbox>
          <IuCheckbox :modelValue="disabled" @update:modelValue="setDis">
            禁用组件跳转
          </IuCheckbox>
        </IuSpace>
      </div>
      <div mb-30px>
        <RouterLink to="/components/button">
          <button class="start-button">
            开始
            <div class="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor" /></svg>
            </div>
          </button>
        </RouterLink>
      </div>
      <JumpPage to="button">
        <Starport port="iu-button" w-490px h-50px>
          <DocButton />
        </Starport>
      </JumpPage>
      <IuSpace>
        <IuSpace vertical align="center">
          <JumpPage to="checkbox">
            <Starport port="iu-checkbox" w-118px h-22px>
              <DocCheckbox />
            </Starport>
          </JumpPage>
          <JumpPage to="switch">
            <Starport port="iu-switch" w-92px h-22px>
              <DocSwitch />
            </Starport>
          </JumpPage>
          <JumpPage to="popover">
            <Starport port="iu-popover" w-330px h-34px>
              <DocPopover />
            </Starport>
          </JumpPage>
          <JumpPage to="space">
            <Starport port="iu-space" w-300px h-34px>
              <DocSpace />
            </Starport>
          </JumpPage>
          <JumpPage to="modal">
            <Starport port="iu-modal" h-34px w-82px>
              <DocModal />
            </Starport>
          </JumpPage>
          <JumpPage to="input">
            <Starport port="iu-input" h-70px w-300px>
              <DocInput />
            </Starport>
          </JumpPage>
        </IuSpace>
        <IuSpace vertical align="center">
          <JumpPage to="card">
            <Starport port="iu-card" w-300px h-100px>
              <DocCard />
            </Starport>
          </JumpPage>
          <JumpPage to="divider">
            <Starport port="iu-divider" w-300px h-164px>
              <DocDivider />
            </Starport>
          </JumpPage>
        </IuSpace>
      </IuSpace>
    </div>
  </div>
</template>

<style scoped lang="scss">
.start-button {
  --iu: relative overflow-hidden
  flex items-center
  h-34px pr-38px pl-16px
  c-white bg-teal-500 dark:bg-teal-600
  shadow-inset shadow-teal-600 shadow dark:shadow-teal-700
  rounded-4px;

  & .icon{
    --iu: absolute
      flex flex-center
      right-4px
      w-25px h-25px
      bg-white
      rounded-4px
      transition-all-300;
  }

  &:hover .icon{
    width: calc(100% - 8px);
  }

  & .icon svg {
    --iu: w-18px c-teal-500 dark:c-teal-600
      transition-transform-300;
  }

  &:hover .icon svg{
    // --iu: translate-x-2px;
  }

  &:active .icon{
    --iu: scale-95;
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
