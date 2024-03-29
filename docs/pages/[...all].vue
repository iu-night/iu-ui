<script setup lang="ts">

</script>

<template>
  <div class="flex-1 flex flex-center perspective-1000px relative">
    <div class="rail">
      <template v-for="item in 10" :key="item">
        <div class="stamp four">
          4
        </div>
        <div class="stamp zero">
          0
        </div>
      </template>
    </div>
    <div class="world">
      <div class="forward">
        <div class="box">
          <div v-for="item in 6" :key="item" class="wall" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable-next-line scss/dollar-variable-pattern */
$wallSize: 200px;

div {
  transform-style: preserve-3d;
}

.rail {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: rotateX(-30deg) rotateY(-30deg);

  .stamp {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $wallSize;
    height: $wallSize;
    color: #fff;
    font-size: 7rem;
    background: rgb(20 20 20 / 100%);

    /* stylelint-disable-next-line at-rule-no-unknown */
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation: stampSlide 20 * 2000ms ($i * -2000) - 300ms linear infinite;
      }
    }
  }
}

@keyframes stampSlide {
  0% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize) translateY(130px);
  }

  100% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize) translateY(130 - 200 * 20px);
  }
}

.world {
  transform: rotateX(-30deg) rotateY(-30deg);

  .forward {
    position: absolute;
    animation: slide 2000ms linear infinite;
  }

  .box {
    width: $wallSize;
    height: $wallSize;
    transform-origin: 100% 100%;
    animation: roll 2000ms cubic-bezier(1, 0.01, 1, 1) infinite;

    .wall {
      position: absolute;
      box-sizing: border-box;
      width: $wallSize;
      height: $wallSize;
      background: rgb(10 10 10 / 80%);
      border: 1px solid rgb(250 250 250 / 100%);

      &::before {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: #fff;
        font-size: 7rem;
        content: '';
      }

      &:nth-child(1) {
        transform: translateZ(calc($wallSize / 2));
      }

      &:nth-child(2) {
        transform: rotateX(180deg) translateZ(calc($wallSize / 2));
      }

      &:nth-child(3) {
        transform: rotateX(90deg) translateZ(calc($wallSize / 2));

        &::before {
          transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }

      &:nth-child(4) {
        transform: rotateX(-90deg) translateZ(calc($wallSize / 2));

        &::before {
          transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }

      &:nth-child(5) {
        transform: rotateY(90deg) translateZ(calc($wallSize / 2));

        &::before {
          transform: rotateX(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }

      &:nth-child(6) {
        transform: rotateY(-90deg) translateZ(calc($wallSize / 2));

        &::before {
          transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
    }
  }
}

@keyframes zeroFour {
  0% {
    content: '4';
  }

  100% {
    content: '0';
  }
}

@keyframes roll {
  0% {
    transform: rotateZ(0deg);
  }

  85% {
    transform: rotateZ(90deg);
  }

  87% {
    transform: rotateZ(88deg);
  }

  90% {
    transform: rotateZ(90deg);
  }

  100% {
    transform: rotateZ(90deg);
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-$wallSize);
  }
}
</style>

<route lang="yaml">
meta:
  layout: 404
</route>
