import { defineStore } from 'pinia'

interface UserState {
  token?: string
  userName: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userName: '',
  }),

  getters: {
    getToken(): string | undefined {
      return this.token
    },
  },

  actions: {
    setToken(token: string | undefined): void {
      this.token = token || ''
    },
  },
})
