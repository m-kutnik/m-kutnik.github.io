<template>
  <nav class="container is-slim flex">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.to"
      class="size-6 link"
    >
      {{ item.name }}
    </router-link>
    <theme-switcher />
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
      // { name: 'About me', to: '/about' },
      // { name: 'Projects', to: '/projects' },
      // { name: 'Contact', to: '/contact' },
    ]

    return { items }
  },
}
</script>
<style lang="scss" scoped></style>
