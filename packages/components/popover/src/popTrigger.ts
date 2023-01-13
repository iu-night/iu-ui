import type { PropType } from 'vue'
import { withDirectives } from 'vue'

import { getFirstVNode } from 'iu-ui/utils'
import type { setRefType } from './popover'

export default defineComponent({
  name: 'IuPopoverSlot',
  props: {
    setRef: {
      type: Function as PropType<setRefType>,
      required: true,
    },
  },
  setup(props) {
    const setTargetDirective = {
      mounted: props.setRef,
      updated: props.setRef,
    }
    return {
      setTargetDirective,
    }
  },
  render() {
    const { setTargetDirective } = this

    return withDirectives(getFirstVNode(this, 'default'), [
      [setTargetDirective],
    ])
  },
})
