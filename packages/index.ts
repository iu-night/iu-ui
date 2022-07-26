import type { App } from 'vue'

import './styles/var.scss'

import * as components from './components'
import * as directives from './directives'

export * from './utils'
export * from './directives'
export * from './components'

export const install = function (app: App) {
  Object.keys(components).forEach((key) => {
    const component = components[key as keyof typeof components]
    if (component.install)
      app.use(component)
  })
  Object.keys(directives).forEach((key) => {
    const directive = directives[key as keyof typeof directives]
    app.use(directive)
  })
  return app
}

export default {
  install,
}
