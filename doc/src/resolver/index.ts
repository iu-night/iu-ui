import type { ComponentResolver } from 'unplugin-vue-components'

/**
 * Resolver for iu-vue
 *
 * @link https://www.iu-night.github.io
 */
export function IuUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^(Iu[A-Z]|iu-[a-z])/))
        return { name, from: 'iu-vue' }
    },
  }
}
