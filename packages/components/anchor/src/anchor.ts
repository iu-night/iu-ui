import { isClient } from '@vueuse/core'
import type { InjectionKey, PropType } from 'vue'
import type { AffixProps } from './../../affix'

type containerType = string | (() => HTMLElement | Window)

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
    default: 10,
  },
  container: {
    type: [String, Function] as PropType<containerType>,
  },
  targetOffset: {
    type: Number,
    default: 0,
  },
}

export const anchorLinkProps = {
  href: {
    type: String,
    default: '#',
  },
  title: {
    type: String,
    default: '',
  },
}

export const anchorKey: InjectionKey<{
  active: string
  registerLink: (link: string) => void
  unregisterLink: (link: string) => void
  handleScrollTo: (link: string) => void
  handleLinkClick: (link: { href: string; title: string; e: MouseEvent }) => void
}> = Symbol('AnchorInjectKey')

export function getOffsetTop(target: HTMLElement, container: Window | HTMLElement | Document | undefined): number {
  if (!isClient || !container)
    return 0
  const { top } = target.getBoundingClientRect()
  if (container === window)
    return top - document.documentElement.clientTop

  return top - (container as HTMLElement).getBoundingClientRect().top
}

export function isWindow(obj: any) {
  return obj !== null && obj !== undefined && obj === obj.window
}

export function getScroll(
  target: HTMLElement | Window | Document | undefined,
  top = true,
): number {
  if (typeof window === 'undefined')
    return 0

  const method = top ? 'scrollTop' : 'scrollLeft'
  let result = 0
  if (isWindow(target))
    result = (target as Window)[top ? 'pageYOffset' : 'pageXOffset']

  else if (target instanceof Document)
    result = target.documentElement[method]

  else if (target)
    result = (target as HTMLElement)[method]

  if (target && !isWindow(target) && typeof result !== 'number') {
    result = ((target as HTMLElement).ownerDocument || (target as Document)).documentElement?.[
      method
    ]
  }
  return result
}

function easeInOutCubic(t: number, b: number, c: number, d: number) {
  const cc = c - b
  t /= d / 2
  if (t < 1)
    return (cc / 2) * t * t * t + b
  return (cc / 2) * ((t -= 2) * t * t + 2) + b
}

interface ScrollToOptions {
  /** Scroll container, default as window */
  getContainer?: HTMLElement | Window | Document | undefined
  /** Scroll end callback */
  callback?: () => any
  /** Animation duration, default as 450 */
  duration?: number
}

export function scrollTo(y: number, options: ScrollToOptions = {}) {
  const { getContainer = window, callback, duration = 400 } = options
  const container = getContainer
  const scrollTop = getScroll(container, true)
  const startTime = Date.now()

  const frameFunc = () => {
    const timestamp = Date.now()
    const time = timestamp - startTime
    const nextScrollTop = easeInOutCubic(time > duration ? duration : time, scrollTop, y, duration)
    if (isWindow(container))
      (container as Window).scrollTo(window.scrollX, nextScrollTop)

    else if (container instanceof Document || container?.constructor.name === 'Document')
      (container as Document).documentElement.scrollTop = nextScrollTop

    else
      (container as HTMLElement).scrollTop = nextScrollTop

    if (time < duration) {
      setTimeout(() => {
        frameFunc()
      }, 16)
    }

    else if (typeof callback === 'function') {
      callback()
    }
  }
  setTimeout(() => {
    frameFunc()
  }, 16)
}
