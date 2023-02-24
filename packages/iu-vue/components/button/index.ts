import { withInstall } from '../../utils'
import button from './src/button.vue'
// const button = defineAsyncComponent(() => import('./src/button.vue'))

export const IuButton = withInstall(button)
