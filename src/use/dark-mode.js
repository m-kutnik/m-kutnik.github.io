import { ref } from '@vue/composition-api'
import { useStorage } from './storage'

export const useDarkMode = () => {
  const { get, set } = useStorage()
  const body = document.querySelector('body')
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const savedInStorage = get('dark-mode')
  const isDark = ref(
    savedInStorage === null ? !!mediaQuery.matches : !!savedInStorage,
  )

  if (isDark.value === true) body.classList.add('is-dark')

  const toggle = () => {
    const value = body.classList.toggle('is-dark')
    isDark.value = value
    set('dark-mode', value)
  }

  mediaQuery.addEventListener('change', ({ matches }) => {
    if (isDark.value !== matches) {
      toggle()
    }
  })

  return {
    toggle,
    isDark,
  }
}
