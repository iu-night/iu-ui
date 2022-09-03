<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Input
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="input" comName="DocInput">
          <Starport port="iu-input" h-70px w-300px>
            <DocInput />
          </Starport>
        </ExDisplay>
        <ExDisplay title="圆角" name="input" comName="InputRound">
          <InputRound />
        </ExDisplay>
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="状态" name="input" comName="InputState">
          <InputState />
        </ExDisplay>
      </IuSpace>
    </IuSpace>
    <div text-20px font-bold mt-20px>
      coming soon...
    </div>
    <!-- <InputApi /> -->
  </div>
</template>
