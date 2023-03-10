import { defineStore } from 'pinia'

interface IState {
  disableJump: boolean
  animate: boolean
}

export const useStore = defineStore('user', {
  state: (): IState => ({
    disableJump: true,
    animate: true,
  }),

  actions: {
    setDisable(val: boolean): void {
      this.disableJump = val
    },
    setAnimate(val: boolean): void {
      this.animate = val
    },
  },
})
