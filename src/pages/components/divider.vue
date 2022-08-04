<template>
  <div class="flex flex-col mt-30px">
    <div mb-30px text-30px font-bold>
      Divider
    </div>
    <IuSpace>
      <ExDisplay title="基础" name="divider" comName="DocDivider">
        <Starport port="iu-divider" h-164px w-300px>
          <DocDivider />
        </Starport>
      </ExDisplay>
      <ExDisplay title="竖直" name="divider" comName="DividerVertical">
        <DividerVertical />
      </ExDisplay>
    </IuSpace>
    <DividerApi />
  </div>
</template>
