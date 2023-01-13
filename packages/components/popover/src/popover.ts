import type { PropType } from 'vue'

type triggerType = 'hover' | 'click' | 'focus' | 'manual'
type placeType = 'top' | 'right' | 'bottom' | 'left'
export type setRefType = (el: HTMLElement | null) => void

export const popoverProps = {
  to: {
    type: String,
    default: 'body',
  },
  placement: {
    type: String as PropType<placeType>,
    default: 'top',
  },
  trigger: {
    type: String as PropType<triggerType>,
    default: 'hover',
  },
}

export interface IInstance {
  setTargetRef: (el: HTMLElement | null) => void
}
