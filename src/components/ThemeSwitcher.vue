<template>
  <button
    tabindex="0"
    role="button"
    aria-label="switch color theme"
    class="theme-switcher"
    @click="toggle"
  >
    <icon-moon v-if="isDark" style="currentColor: red" />
    <icon-sun v-else />
  </button>
</template>

<script>
import { useDarkMode } from '@/use/dark-mode'

export default {
  name: 'ThemeSwitcher',
  setup() {
    const { toggle, isDark } = useDarkMode()

    return {
      isDark,
      toggle,
    }
  },
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  stroke: rgb(139, 139, 139, 0.5);
  cursor: pointer;
  margin-bottom: 32px;

  &:focus,
  &:hover {
    stroke: var(--link);
  }
}
</style>
