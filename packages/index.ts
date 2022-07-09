import type { App } from 'vue'

// 引入样式
import './styles/var.scss'

// 全局 => 定义 install 方法
import * as components from './components'

export * from './components'

const install: any = function (Vue: App): void {
  if (install.installed)
    return
  const _components = Object.keys(components).map(
    key => components[key as keyof typeof components],
  )
  _components.forEach((component: any) => {
    if (
      // eslint-disable-next-line no-prototype-builtins
      component.hasOwnProperty('name') && component.hasOwnProperty('setup')
    )
      Vue.component(component.name, component)
  })
}

export default {
  install,
}
