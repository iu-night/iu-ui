<script setup lang="ts">
import { DividerVerticalCode, DocDividerCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Divider
    </div>
    <IuSpace>
      <CodeBox w-500px title="基础" :code="DocDividerCode">
        <Starport port="iu-divider" w-300px h-164px>
          <DocDivider />
        </Starport>
      </CodeBox>
      <CodeBox w-500px title="竖直" :code="DividerVerticalCode">
        <DividerVertical />
      </CodeBox>
    </IuSpace>
    <DividerApi />
  </div>
</template>
