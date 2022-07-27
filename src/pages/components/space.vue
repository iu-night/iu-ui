<script setup lang="ts">
import { DocSpaceCode, SpaceAroundCode, SpaceCenterCode, SpaceEndCode, SpaceVerticalCenterCode, SpaceVerticalCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Space
    </div>
    <IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="基础" :code="DocSpaceCode">
          <Starport port="iu-space" w-300px h-34px>
            <DocSpace />
          </Starport>
        </CodeBox>
        <CodeBox w-500px title="居中" :code="SpaceCenterCode">
          <SpaceCenter />
        </CodeBox>
        <CodeBox w-500px title="around" :code="SpaceAroundCode">
          <SpaceAround />
        </CodeBox>
        <CodeBox w-500px title="end" :code="SpaceEndCode">
          <SpaceEnd />
        </CodeBox>
      </IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="垂直" :code="SpaceVerticalCode">
          <SpaceVertical />
        </CodeBox>
        <CodeBox w-500px title="垂直居中" :code="SpaceVerticalCenterCode">
          <SpaceVerticalCenter />
        </CodeBox>
      </IuSpace>
    </IuSpace>
    <SpaceApi />
  </div>
</template>
