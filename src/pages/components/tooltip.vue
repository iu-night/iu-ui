<script setup lang="ts">
import { DocTooltipCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Button
    </div>
    <IuSpace vertical>
      <CodeBox w-500px title="基础" :code="DocTooltipCode">
        <Starport port="iu-tooltip" w-296px h-34px>
          <DocTooltip />
        </Starport>
      </CodeBox>
    </IuSpace>
  </div>
</template>
