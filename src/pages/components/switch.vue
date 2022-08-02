<script setup lang="ts">
import { DocSwitchCode, SwitchColorCode, SwitchRoundCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Switch
    </div>
    <IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="基础" :code="DocSwitchCode">
          <Starport port="iu-switch" w-92px h-22px>
            <DocSwitch />
          </Starport>
        </CodeBox>
        <CodeBox w-500px title="形状" :code="SwitchRoundCode">
          <SwitchRound />
        </CodeBox>
      </IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="颜色" :code="SwitchColorCode">
          <SwitchColor />
        </CodeBox>
      </IuSpace>
    </IuSpace>
    <SwitchApi />
  </div>
</template>
