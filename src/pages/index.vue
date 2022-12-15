<script setup lang="ts">
const store = useStore()
const disabled = computed(() => store.disableJump)
const setDis = (val: boolean) => {
  store.setDisable(val)
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
      <div mb-30px font-bold>
        <IuCheckbox :modelValue="disabled" @update:modelValue="setDis">
          禁用跳转
        </IuCheckbox>
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
          <JumpPage to="tooltip">
            <Starport port="iu-tooltip" w-236px h-34px>
              <DocTooltip />
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
// .dark .someStyle {
//   --iu: p-10px rounded-5px overflow-hidden z-5;

//   box-shadow: inset 0 0 10px #80c3ff, 0 0 20px 10px rgb(163 212 255 / 13%);

//   &::before {
//     --iu: animate-spin animate-duration-5000;

//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: -1;
//     width: 100%;
//     height: 100%;
//     border-radius: 0 !important;
//     box-shadow: 0 0 17px 3px #a3d4ff, 0 0 4px 2px #a3d4ff, inset 0 0 17px 3px #80c3ff, inset 0 0 4px 2px #80c3ff;
//     content: '';
//   }
// }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
