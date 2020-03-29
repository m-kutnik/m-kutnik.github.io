<template>
  <nav class="container is-thin flex hidden-on-mobile">
    <router-link to="/" class="home-button hide-above-mobile">
      <icon-home />
    </router-link>
    <app-navigation class="hide-on-mobile" />
    <theme-switcher class="item-right" />
  </nav>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'
import AppNavigation from './AppNavigation'

export default {
  name: 'TheNavbar',
  components: {
    ThemeSwitcher,
    AppNavigation,
  },
}
</script>
<style lang="scss" scoped>
nav {
  flex-direction: row;
}

.item-right {
  margin-left: auto;
}

.home-button {
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: rgb(139, 139, 139, 0.5);

  &:focus,
  &:hover {
    stroke: var(--link);
  }
}
</style>
