<script setup lang="ts">
const name = 'Card'
const anchor = [
  'Card',
  'API',
  'Card Props',
  'Card Slots',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <IuSpace vertical>
      <ExDisplay title="基础" name="card" comName="DocCard">
        <Starport port="iu-card" h-100px w-300px>
          <DocCard />
        </Starport>
      </ExDisplay>
      <ExDisplay title="悬浮" name="card" comName="CardHoverable">
        <CardHoverable />
      </ExDisplay>
    </IuSpace>
    <IuSpace vertical>
      <ExDisplay title="插槽" name="card" comName="CardSlot">
        <CardSlot />
      </ExDisplay>
      <ExDisplay title="边框" name="card" comName="CardBordered">
        <CardBordered />
      </ExDisplay>
    </IuSpace>
    <template #api>
      <CardApi />
    </template>
  </ComPage>
</template>
