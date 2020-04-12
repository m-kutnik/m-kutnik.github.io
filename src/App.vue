<template>
  <div id="app">
    <the-navbar />
    <transition name="slide-fade" mode="out-in" appear>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>

<style lang="scss">
html {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-weight: 300;
}

:root {
  --link: var(--secondary);
}

.no-break {
  white-space: nowrap;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
.subtitle {
  font-family: 'Muli', sans-serif;
}

/* Transitions */

.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
