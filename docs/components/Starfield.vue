<script setup lang="ts">
const COUNT = 50
let SPEED = 0.4

let rafId = 0
let canvas = ref<HTMLCanvasElement>()
const container = shallowRef<HTMLElement>()
let ctx = ref(canvas.value?.getContext('2d'))

class Star {
  x: number
  y: number
  z: number
  xPrev: number
  yPrev: number
  constructor(x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
    this.xPrev = x
    this.yPrev = y
  }

  update(width: number, height: number, speed: number) {
    this.xPrev = this.x
    this.yPrev = this.y
    this.z += speed * 0.0675
    this.x += this.x * (speed * 0.0225) * this.z
    this.y += this.y * (speed * 0.0225) * this.z
    if (
      this.x > width / 2
        || this.x < -width / 2
        || this.y > height / 2
        || this.y < -height / 2
    ) {
      this.x = Math.random() * width - width / 2
      this.y = Math.random() * height - height / 2
      this.xPrev = this.x
      this.yPrev = this.y
      this.z = 0
    }
  }

  draw(ctx.value: CanvasRenderingContext2D) {
    ctx.value.lineWidth = this.z
    ctx.value.beginPath()
    ctx.value.moveTo(this.x, this.y)
    ctx.value.lineTo(this.xPrev, this.yPrev)
    ctx.value.stroke()
  }
}

const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0))

const frame = () => {
  if (container.value) {
    const { clientWidth: width, clientHeight: height } = container.value
    if (ctx.value) {
      for (const star of stars) {
        star.update(width, height, SPEED)
        star.draw(ctx.value)
      }
      ctx.value.fillRect(-width / 2, -height / 2, width, height)
    }
    rafId = requestAnimationFrame(frame)
  }
}

const setup = () => {
  rafId > 0 && cancelAnimationFrame(rafId)
  if (container.value && canvas.value && window) {
    const { clientWidth: width, clientHeight: height } = container.value
    const dpr = window.devicePixelRatio || 1
    canvas.value.width = width * dpr
    canvas.value.height = height * dpr
    canvas.value.style.width = `${width}px`
    canvas.value.style.height = `${height}px`
    ctx.value?.scale(dpr, dpr)
    for (const star of stars) {
      star.x = Math.random() * width - width / 2
      star.y = Math.random() * height - height / 2
      star.z = 0
    }
    ctx.value?.translate(width / 2, height / 2)
    if (ctx.value) {
      ctx.value.fillStyle = 'rgba(0, 0, 0, 0.2)'
      ctx.value.strokeStyle = 'white'
    }
    rafId = requestAnimationFrame(frame)
  }
}

const resizeObserver = new ResizeObserver(setup)

onMounted(() => {
  ctx.value = canvas.value?.getContext('2d')
  if (container.value)
    resizeObserver.observe(container.value)
})
</script>

<template>
  <div ref="container" class="absolute inset-0 -z-1">
    <canvas ref="canvas" />
  </div>
</template>
