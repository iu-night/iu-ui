// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import StarportPlugin from 'vue-starport'
import iu from '../packages'
import App from './App.vue'

import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'

import '../packages/styles/var.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    ctx.app.use(StarportPlugin())
    ctx.app.use(iu)
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
)
