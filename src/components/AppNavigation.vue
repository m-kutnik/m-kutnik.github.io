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
    margin-right: auto;
    margin-left: auto;
  }
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  line-height: 1;

  &::after {
    position: absolute;
    right: 0;
    bottom: -4px;
    left: 0;
    height: 2px;
    background: var(--link);
    content: '';
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
