function getParentNode(node: Node): Node | null {
  // document
  if (node.nodeType === 9)
    return null
  return node.parentNode
}

const getScrollParent = (node: Node | null): HTMLElement | null => {
  if (node === null)
    return null
  const parentNode = getParentNode(node)
  if (parentNode === null)
    return null
  if (parentNode.nodeType === 9)
    return document.documentElement
  // Element
  if (parentNode.nodeType === 1) {
    const { overflow, overflowX, overflowY } = getComputedStyle(
      parentNode as HTMLElement,
    )
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX))
      return parentNode as HTMLElement
  }
  return getScrollParent(parentNode)
}
