import type { ComponentPublicInstance, PropType, VNode, VNodeChild } from 'vue'
import { Comment, Fragment } from 'vue'

import './index.scss'

function getSlot(
  instance: ComponentPublicInstance,
  slotName = 'default',
  fallback: VNodeChild[] = [],
): VNodeChild[] {
  const slots = instance.$slots
  const slot = slots[slotName]
  if (slot === undefined)
    return fallback
  return slot()
}

function flatten(vNodes: any) {
  const result: VNode[] = []
  vNodes.forEach((vNode: any) => {
    if (vNode.type === Comment)
      return
    if (vNode.type === Fragment && Array.isArray(vNode.children)) {
      vNode.children.forEach((item: VNode) => {
        result.push(item)
      })
      return
    }
    result.push(vNode)
  })
  return result
}

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
