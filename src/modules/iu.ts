// import iu from 'iu-ui'
import { IuVTooltip } from 'iu-ui'
import type { App } from 'vue'
// import { type UserModule } from '@/types'

// export const install: UserModule = ({ app }) => {
//   app.use(IuVTooltip)
// }

export function setupIu(app: App) {
  app.use(IuVTooltip)
}
