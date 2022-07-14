import type { App } from 'vue'

import './styles/var.scss'

import * as components from './components'

export * from './components'

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key as keyof typeof components]
    if (component.install)
      app.use(component)
  })
  return app
}

export default {
  install,
}
