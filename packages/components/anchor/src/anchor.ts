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

export function getOffsetTop(target: HTMLElement, container: Window | HTMLElement): number {
  const { top } = target.getBoundingClientRect()
  if (container === window)
    return top - document.documentElement.clientTop

  return top - (container as HTMLElement).getBoundingClientRect().top
}
