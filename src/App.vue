<template>
  <div id="app">
    <the-navbar />
    <transition name="slide-fade" mode="out-in" appear>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'

export default {
  components: {
    TheNavbar,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli:200i,200,500i,700i&display=swap&subset=latin-ext');

html {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

.slide-fade-enter-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
