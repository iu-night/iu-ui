import type { App, Component, Plugin } from 'vue'

function withInstall<T>(comp: T, alias?: string): T & Plugin {
  const componentPlugin = comp as T & Component & Plugin

  componentPlugin.install = (app: App) => {
    app.component(alias || componentPlugin.name as string, comp)
  }

  return componentPlugin as T & Plugin
}

export default withInstall
