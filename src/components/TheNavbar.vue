<template>
  <nav class="container is-thin flex hidden-on-mobile">
    <router-link to="/" class="home-button hide-above-mobile">
      <icon-home />
    </router-link>
    <router-link
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="menu-item hide-on-mobile"
    >
      {{ item.name }}
    </router-link>
    <theme-switcher class="item-right" />
  </nav>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default {
  name: 'TheNavbar',
  components: {
    ThemeSwitcher,
  },
  setup() {
    const items = [
      { name: 'Home', to: '/' },
      { name: 'About me', to: '/about' },
      { name: 'Projects', to: '/projects' },
      { name: 'Contact', to: '/contact' },
    ]

    return { items }
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

.menu-item {
  position: relative;
  letter-spacing: 0.1em;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    left: 0;
    right: 0;
    content: '';
    position: absolute;
    height: 2px;
    background: var(--link);
    bottom: -4px;
    transform: scale(0, 1);
    transform-origin: 100% 50%;
    transition: transform 0.2s var(--transition-function);
  }

  &:hover::after,
  &.router-link-exact-active::after {
    transform: scale(1, 1);
    transform-origin: 0% 50%;
  }
}
</style>
