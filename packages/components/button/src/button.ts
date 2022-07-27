import type { PropType } from 'vue'
type buttonType = 'default' | 'primary' | 'warning' | 'success' | 'error'

export const buttonProps = {
  type: {
    type: String as PropType<buttonType>,
    default: 'default',
  },
  round: {
    type: Boolean,
    default: false,
  },
}
