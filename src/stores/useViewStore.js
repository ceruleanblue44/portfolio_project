import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useViewStore = defineStore('view', () => {
  const isMobile = ref(false)

  const setupMediaQuery = () => {
    const mediaQuery = window.matchMedia('(max-width: 719px), (orientation: landscape) and (max-height: 600px)')
    const update = () => {
      isMobile.value = mediaQuery.matches
    }

    update()
    mediaQuery.addEventListener('change', update)
  }

  return { isMobile, setupMediaQuery }
})
