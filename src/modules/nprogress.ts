import NProgress from 'nprogress'
import { type UserModule } from '@/types'
// import type { Router } from 'vue-router'

// export function setupNprogress(router: Router) {
//   router.beforeEach((to, from) => {
//     if (to.path !== from.path)
//       NProgress.start()
//   })
//   router.afterEach(() => {
//     NProgress.done()
//   })
// }

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from) => {
      if (to.path !== from.path)
        NProgress.start()
    })
    router.afterEach(() => {
      NProgress.done()
    })
  }
}
