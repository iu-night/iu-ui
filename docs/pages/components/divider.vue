<script setup lang="ts">
const name = 'Divider'
const anchor = [
  'Divider',
  'API',
  'Divider Props',
]
</script>

<template>
  <ComPage :name="name" :anchor="anchor">
    <ExDisplay title="基础" name="divider" comName="DocDivider">
      <Starport port="iu-divider" h-164px w-300px>
        <DocDivider />
      </Starport>
    </ExDisplay>
    <ExDisplay title="竖直" name="divider" comName="DividerVertical">
      <DividerVertical />
    </ExDisplay>
    <template #api>
      <DividerApi />
    </template>
  </ComPage>
</template>
