<script setup lang="ts">
const store = useStore()
const disabled = computed(() => store.disableJump)
const setDis = (val: boolean) => {
  store.setDisable(val)
}
</script>

<template>
  <div flex-center flex-col mt-30px z-1>
    <!-- <div absolute top-40px right-40px font-bold>
      <IuCheckbox :modelValue="disabled" @update:modelValue="setDis">
        禁用跳转
      </IuCheckbox>
    </div> -->
    <div mb-30px font-bold>
      <IuCheckbox :modelValue="disabled" @update:modelValue="setDis">
        禁用跳转
      </IuCheckbox>
    </div>
    <JumpPage to="/components/button">
      <Starport port="iu-button" w-490px h-50px>
        <DocButton />
      </Starport>
    </JumpPage>
    <IuSpace>
      <IuSpace vertical align="center">
        <JumpPage to="/components/checkbox">
          <Starport port="iu-checkbox" w-118px h-22px>
            <DocCheckbox />
          </Starport>
        </JumpPage>
        <JumpPage to="/components/switch">
          <Starport port="iu-switch" w-92px h-22px>
            <DocSwitch />
          </Starport>
        </JumpPage>
        <JumpPage to="/components/tooltip">
          <Starport port="iu-tooltip" w-236px h-34px>
            <DocTooltip />
          </Starport>
        </JumpPage>
        <JumpPage to="/components/space">
          <Starport port="iu-space" w-300px h-34px>
            <DocSpace />
          </Starport>
        </JumpPage>
        <JumpPage to="/components/modal">
          <Starport port="iu-modal" h-34px w-82px>
            <DocModal />
          </Starport>
        </JumpPage>
      </IuSpace>
      <IuSpace vertical align="center">
        <JumpPage to="/components/card">
          <Starport port="iu-card" w-300px h-100px>
            <DocCard />
          </Starport>
        </JumpPage>
        <JumpPage to="/components/divider">
          <Starport port="iu-divider" w-300px h-164px>
            <DocDivider />
          </Starport>
        </JumpPage>
      </IuSpace>
    </IuSpace>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
