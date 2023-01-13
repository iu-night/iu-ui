import type { PropType } from 'vue'
import { flatten, getSlot } from 'iu-ui/utils'

import './index.scss'

const spaceProps = {
  vertical: {
    type: Boolean,
    default: false,
  },
  align: { type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'> },
  justify: {
    type: String as PropType<'start' | 'end' | 'center' | 'around' | 'between' | 'evenly'>,
    default: 'start',
  },
  gap: String,
  gapX: String,
  gapY: String,
}

export default defineComponent({
  name: 'IuSpace',
  props: spaceProps,

  render() {
    const { vertical, align, justify, gap, gapX, gapY } = this
    const children = flatten(getSlot(this))
    const spaceContents = children.map(child => (
      <div role="none" style="max-width: 100%">
        {child}
      </div>
    ))

    return (
      <div
        class={`iu-space iu-space-justify-${justify} ${align ? `iu-space-align-${align}` : ''} ${vertical ? 'iu-space-vertical' : ''}`}
        style={`gap: ${gap}; column-gap: ${gapX}; row-gap: ${gapY};`}
      >
        {spaceContents}
      </div>
    )
  },
})
