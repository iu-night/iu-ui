import type { PropType } from 'vue'
import type { AffixProps } from './../../affix'

export const anchorProps = {
  affix: {
    type: Boolean,
    default: false,
  },
  affixProps: {
    type: Object as PropType<AffixProps>,
  },
  bounds: {
    type: Number,
    default: 0,
  },
}
