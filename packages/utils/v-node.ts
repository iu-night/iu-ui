import type { ComponentPublicInstance, VNode, VNodeChild } from 'vue'
import { Comment, Fragment } from 'vue'

export function flatten(vNodes: any) {
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

export function getSlot(
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

export function getFirstVNode(
  instance: ComponentPublicInstance,
  slotName = 'default',
) {
  const slots = instance.$slots
  const slot = slots[slotName]
  if (slot === undefined)
    throw new Error(`slot[${slotName}] is empty.`)

  const content = flatten(slot())
  if (content.length === 1) {
    return content[0]
  }
  else {
    throw new Error(
      `slot[${slotName}] should have exactly one child.`,
    )
  }
}
