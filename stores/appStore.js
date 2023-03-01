import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    count: 0,
    showSidebar: false,
  }),

  actions: {
    increaseCount() {
      this.count++
    },

    decreaseCount() {
      this.count--
    },

    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  }
})
