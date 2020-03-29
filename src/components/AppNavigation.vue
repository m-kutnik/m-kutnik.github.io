<template>
  <div class="flex">
    <router-link
      v-for="item in items"
      :key="item.to.name"
      :to="item.to"
      class="menu-item"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'AppNavigation',
  setup() {
    const items = [
      { name: 'Home', to: { name: 'Home' } },
      { name: 'About me', to: { name: 'About' } },
      { name: 'Projects', to: { name: 'Projects' } },
      { name: 'Contact', to: { name: 'Contact' } },
    ]

    return { items }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 48rem) {
  .menu-item {
    margin-left: auto;
    margin-right: auto;
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
  &.router-link-active::after {
    transform: scale(1, 1);
    transform-origin: 0% 50%;
  }
}
</style>
