import { defineStore } from 'pinia'

interface IState {
  disableJump: boolean
}

export const useStore = defineStore('user', {
  state: (): IState => ({
    disableJump: true,
  }),

  actions: {
    setDisable(val: boolean): void {
      this.disableJump = val
    },
  },
})
