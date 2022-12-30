import StarportPlugin from 'vue-starport'
// import type { App } from 'vue'
import { type UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(StarportPlugin())
}

// export function setupStarport(app: App) {
//   app.use(StarportPlugin())
// }
