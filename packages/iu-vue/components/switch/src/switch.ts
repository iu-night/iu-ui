import type { PropType } from 'vue'
export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'rgba(42, 148, 125, 1)',
  },
  round: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
