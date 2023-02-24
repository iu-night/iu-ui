<script setup lang="ts">

</script>

<template>
  <div class="flex-center h-full w-full">
    <div class="pl">
      <div class="pl__outer-ring" />
      <div class="pl__inner-ring" />
      <div class="pl__track-cover" />
      <div class="pl__ball">
        <div class="pl__ball-texture" />
        <div class="pl__ball-outer-shadow" />
        <div class="pl__ball-inner-shadow" />
        <div class="pl__ball-side-shadows" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pl,
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
  border-radius: 50%;
}

.pl {
  position: relative;
  width: 16em;
  height: 16em;
}

.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__ball-texture::before,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
  position: absolute;
}

.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-texture::before,
.pl__track-cover {
  animation: ball 3s linear infinite;
}

.pl__ball {
  top: calc(50% - 1.25em);
  left: calc(50% - 1.25em);
  width: 2.5em;
  height: 2.5em;
  transform: rotate(0) translateY(-6.5em);
}

.pl__ball-inner-shadow {
  width: 100%;
  height: 100%;
  box-shadow:
    0 0.1em 0.2em hsl(0deg 0% 0% / 30%),
    0 0 0.2em hsl(0deg 0% 0% / 10%) inset,
    0 -1em 0.5em hsl(0deg 0% 0% / 15%) inset;
  animation-name: ballInnerShadow;
}

.pl__ball-outer-shadow {
  top: 50%;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 250%;
  background-image: linear-gradient(hsl(0deg 0% 0% / 15%), hsl(0deg 0% 0% / 0%));
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
  transform: rotate(20deg);
  transform-origin: 50% 0;
  filter: blur(2px);
  animation-name: ballOuterShadow;
}

.pl__ball-side-shadows {
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: hsl(0deg 0% 0% / 10%);
  transform: scale(0.75, 1.1);
  filter: blur(2px);
}

.pl__ball-texture {
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

.pl__ball-texture::before {
  top: 0;
  right: 0;
  display: block;
  width: 200%;
  height: 100%;
  background: url('@/assets/snowball.jpg') 0 0 / 50% 100%;
  filter: brightness(1.05);
  animation-name: ballTexture;
  animation-duration: 0.25s;
  content: '';
}

.pl__inner-ring {
  top: 2.375em;
  left: 2.375em;
  width: calc(100% - 4.75em);
  height: calc(100% - 4.75em);
  box-shadow:
    0 -0.25em 0.5em hsl(0deg 0% 100% / 40%),
    0 0.5em 0.75em hsl(0deg 0% 100% / 40%) inset,
    0 0.5em 0.375em hsl(0deg 0% 0% / 15%),
    0 -0.5em 0.75em hsl(0deg 0% 0% / 15%) inset;
}

.pl__outer-ring {
  top: 0.75em;
  left: 0.75em;
  width: calc(100% - 1.5em);
  height: calc(100% - 1.5em);
  box-shadow:
    0 -0.45em 0.375em hsl(0deg 0% 0% / 15%),
    0 0.5em 0.75em hsl(0deg 0% 0% / 15%) inset,
    0 0.25em 0.5em hsl(0deg 0% 100% / 40%),
    0 -0.5em 0.75em hsl(0deg 0% 100% / 40%) inset;
}

.pl__track-cover {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: conic-gradient(hsl(0deg 0% 98.04% / 100%) 210deg, hsl(223deg 90% 95% / 0%) 270deg);
  animation-name: trackCover;

  .dark & {
    background-image: conic-gradient(hsl(0deg 0% 11.76% / 100%) 210deg, hsl(223deg 90% 95% / 0%) 270deg);
  }
}

/* Animations */
@keyframes ball {
  0% {
    transform: rotate(0) translateY(-6.5em);
  }

  50% {
    transform: rotate(180deg) translateY(-6em);
  }

  100% {
    transform: rotate(360deg) translateY(-6.5em);
  }
}

@keyframes ballInnerShadow {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(-360deg);
  }
}

@keyframes ballOuterShadow {
  from {
    transform: rotate(20deg);
  }

  to {
    transform: rotate(-340deg);
  }
}

@keyframes ballTexture {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(50%);
  }
}

@keyframes trackCover {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
