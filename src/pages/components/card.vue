<script setup lang="ts">
import { CardBorderedCode, CardHoverableCode, CardSlotCode, DocCardCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Card
    </div>
    <IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="基础" :code="DocCardCode">
          <Starport port="iu-card" w-300px h-100px>
            <DocCard />
          </Starport>
        </CodeBox>
        <CodeBox w-500px title="悬浮" :code="CardHoverableCode">
          <CardHoverable />
        </CodeBox>
      </IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="插槽" :code="CardSlotCode">
          <CardSlot />
        </CodeBox>
        <CodeBox w-500px title="边框" :code="CardBorderedCode">
          <CardBordered />
        </CodeBox>
      </IuSpace>
    </IuSpace>
    <CardApi />
  </div>
</template>
