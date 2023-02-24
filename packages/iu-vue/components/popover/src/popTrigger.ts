import type { PropType } from 'vue'
import { cloneVNode, withDirectives } from 'vue'

import { getFirstVNode } from '../../../utils'
import type { setRefType } from './popover'

export default defineComponent({
  name: 'IuPopoverSlot',
  props: {
    setRef: {
      type: Function as PropType<setRefType>,
      required: true,
    },
  },
  setup(props, { attrs }) {
    const setTargetDirective = {
      mounted: props.setRef,
      updated: props.setRef,
    }
    return {
      setTargetDirective,
      attrs,
    }
  },
  render() {
    const { setTargetDirective, attrs } = this
    const firstLegitNode = getFirstVNode(this, 'default')

    return withDirectives(cloneVNode(firstLegitNode!, attrs), [
      [setTargetDirective],
    ])
  },
})
