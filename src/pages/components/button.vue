<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Button
    </div>
    <IuSpace>
      <IuSpace vertical>
        <ExDisplay title="基础" name="button" comName="DocButton">
          <Starport port="iu-button" h-34px w-490px>
            <DocButton />
          </Starport>
        </ExDisplay>
        <ExDisplay title="禁用" name="button" comName="ButtonDisabled">
          <ButtonDisabled />
        </ExDisplay>
      </IuSpace>
      <IuSpace vertical>
        <ExDisplay title="圆角" name="button" comName="ButtonRound">
          <ButtonRound />
        </ExDisplay>
      </IuSpace>
    </IuSpace>
    <ButtonApi />
  </div>
</template>
