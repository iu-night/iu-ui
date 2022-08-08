<script setup lang="ts">
</script>

<template>
  <div flex-center flex-col mt-8px>
    <!-- <button btn mb-30px text-18px @click="$router.push('/guide/start')">
      开始
    </button> -->
    <IuSpace vertical align="center">
      <RouterLink flex to="/components/button">
        <Starport port="iu-button" w-375px h-50px>
          <DocButton />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/card">
        <Starport port="iu-card" w-300px h-100px>
          <DocCard />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/tooltip">
        <Starport port="iu-tooltip" w-236px h-34px>
          <DocTooltip />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/space">
        <Starport port="iu-space" w-300px h-34px>
          <DocSpace />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/checkbox">
        <Starport port="iu-checkbox" w-118px h-22px>
          <DocCheckbox />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/switch">
        <Starport port="iu-switch" w-92px h-22px>
          <DocSwitch />
        </Starport>
      </RouterLink>
      <RouterLink flex to="/components/divider">
        <Starport port="iu-divider" w-300px h-164px>
          <DocDivider />
        </Starport>
      </RouterLink>
    </IuSpace>
  </div>
</template>

<style scoped lang="scss">
</style>

<route lang="yaml">
meta:
  layout: home
</route>
