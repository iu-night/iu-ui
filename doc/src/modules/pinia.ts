import { createPinia } from 'pinia'
import { type UserModule } from '@/types'
// import type { App } from 'vue'

// export function setupPinia(app: App) {
//   const pinia = createPinia()
//   app.use(pinia)
// }

export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)

  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
}
