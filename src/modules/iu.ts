// import iu from 'iu-ui'
import { IuVTooltip } from 'iu-ui'
import { type UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(IuVTooltip)
}
