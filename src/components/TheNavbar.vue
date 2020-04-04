<template>
  <nav class="container is-thin flex hidden-on-mobile">
    <router-link to="/" class="home-button hide-above-mobile">
      <icon-home />
    </router-link>
    <app-navigation class="hide-on-mobile" />
    <app-theme-switcher class="item-right" />
  </nav>
</template>

<script>
import AppThemeSwitcher from '@/components/AppThemeSwitcher'
import AppNavigation from './AppNavigation'

export default {
  name: 'TheNavbar',
  components: {
    AppThemeSwitcher,
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
  align-items: center;
  justify-content: center;
  color: rgb(139, 139, 139, 0.5);

  &:focus,
  &:hover {
    color: var(--link);
  }
}
</style>
