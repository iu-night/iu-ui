import { Fragment, defineComponent, ref } from 'vue'

import type { ExtractPropTypes, PropType, VNodeArrayChildren } from 'vue'
import { getFirstVNode } from '../../utils'
import { composeRefs } from './compseRefs'

export type RefSetter = (el: HTMLElement | null) => void

export const forwardRefProps = {
  setRef: {
    type: Function as PropType<RefSetter>,
    required: true,
  },
  onlyChild: Boolean,
}

export type ForwardRefProps = ExtractPropTypes<typeof forwardRefProps>

// TODO: consider make this component a reusable component without the only child feature.
export default defineComponent({
  props: {
    setRef: {
      type: Function as PropType<RefSetter>,
      required: true,
    },
    onlyChild: Boolean,
  },
  setup(props, { slots }) {
    const fragmentRef = ref()
    const setRef = composeRefs(fragmentRef, (el) => {
      // vue fragments is represented as a text element.
      // The first element sibling should be the first element children of fragment.
      // This is how we get the element.
      if (el) {
        props.setRef(
          (el as HTMLElement).nextElementSibling as HTMLElement | null,
        )
      }
      else {
        props.setRef(null)
      }
    })
    return {
      setref: setRef,
      // const child = getFirstVNode(this)
      // const [firstChild] = slots.default?.() || []
      // const child = props.onlyChild
      //   ? ensureOnlyChild(firstChild.children as VNodeArrayChildren)
      //   : firstChild.children
      // Dunno why the ref for jsx complains about the typing issue which was not
      // in template
      // return <Fragment ref={setRef as any}>{child}</Fragment>
    }
  },
  render() {
    const child = getFirstVNode(this)
    return <Fragment ref={this.setref as any}>{child}</Fragment>
  },
})
