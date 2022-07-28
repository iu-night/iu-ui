import type { PropType } from 'vue'

export const backtopProps = {
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
  target: {
    type: String,
    default: '',
  },
}
