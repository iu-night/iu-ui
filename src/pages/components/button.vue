<script setup lang="ts">
import { ButtonDisabledCode, ButtonRoundCode, DocButtonCode } from '@/components/doc'
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Button
    </div>
    <IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="基础" :code="DocButtonCode">
          <Starport port="iu-button" w-375px h-34px>
            <DocButton />
          </Starport>
        </CodeBox>
        <CodeBox w-500px title="禁用" :code="ButtonDisabledCode">
          <ButtonDisabled />
        </CodeBox>
      </IuSpace>
      <IuSpace vertical>
        <CodeBox w-500px title="圆角" :code="ButtonRoundCode">
          <ButtonRound />
        </CodeBox>
      </IuSpace>
    </IuSpace>
    <ButtonApi />
  </div>
</template>
