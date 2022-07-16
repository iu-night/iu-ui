<script setup lang="ts">
import { DocCardCode, DocCardSlotCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Card
    </div>
    <IuSpace>
      <CodeBox w-500px title="基础" :code="DocCardCode">
        <Starport port="iu-card" w-300px h-100px>
          <DocCard />
        </Starport>
      </CodeBox>
      <CodeBox w-500px title="悬浮" :code="DocCardSlotCode">
        在写了在写了...
      </CodeBox>
      <CodeBox w-500px title="插槽" :code="DocCardSlotCode">
        <DocCardSlot />
      </CodeBox>
    </IuSpace>
  </div>
</template>
