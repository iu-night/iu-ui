import { withInstall } from '../../utils'
import affix from './src/affix.vue'

export type { AffixProps } from './src/affix'
export const IuAffix = withInstall(affix)
