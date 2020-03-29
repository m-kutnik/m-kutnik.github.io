<template>
  <footer class="section is-tiny footer is-dark text-centered">
    <nav class="container">
      <app-navigation class="justify-center" />
    </nav>
    <span>© {{ year }} Mike Kutnik</span>
  </footer>
</template>
<script>
import AppNavigation from './AppNavigation'

export default {
  name: 'TheFooter',
  components: { AppNavigation },
  setup() {
    const year = new Date().getFullYear()

    return { year }
  },
}
</script>
<style lang="scss" scoped>
.is-dark .footer {
  background: #272727;
}

.justify-center {
  justify-content: center;
}
.footer {
  background: var(--tertiary);
}
</style>
