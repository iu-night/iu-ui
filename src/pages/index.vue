<script setup lang="ts">
const store = useStore()
const disabled = computed(() => store.disableJump)
const setDis = (val: boolean) => {
  store.setDisable(val)
}
</script>

<template>
  <div flex-center flex-col mt-30px relative z-1>
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
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
