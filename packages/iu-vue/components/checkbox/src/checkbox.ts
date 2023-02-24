import type { PropType } from 'vue'
export const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'rgba(42, 148, 125, 1)',
  },
  checkColor: {
    type: String,
    default: '#fff',
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
