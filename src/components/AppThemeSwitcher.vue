<template>
  <button
    tabindex="0"
    role="button"
    aria-label="switch color theme"
    class="theme-switcher"
    @click="toggle"
  >
    <icon-moon v-if="isDark" />
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
  align-items: center;
  justify-content: center;
  border: none; // stylelint-disable-line
  margin-bottom: 32px;
  background: none;
  color: rgb(139, 139, 139, 0.5);
  cursor: pointer;

  &:focus,
  &:hover {
    color: var(--link);
  }
}
</style>
