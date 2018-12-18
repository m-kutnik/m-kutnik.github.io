<template>
  <div id="app">
    <nav class="navbar">
      <RouterLink
        to="/"
        @mouseover.native="mouseover(0)"
        @mouseleave.native="mouseleave()"
        @click="mouseover(0)"
      >
        About
      </RouterLink>
      <RouterLink
        to="/projects"
        @mouseover.native="mouseover(1)"
        @mouseleave.native="mouseleave()"
        @click="mouseover(1)"
      >
        Projects
      </RouterLink>
      <RouterLink
        to="/contact"
        @mouseover.native="mouseover(2)"
        @mouseleave.native="mouseleave()"
        @click="mouseover(2)"
      >
        Contact
      </RouterLink>
      <span class="underline" :style="underlineStyle"></span>
    </nav>
    <Transition name="slide-fade" mode="out-in" appear>
      <RouterView />
    </Transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      underline: {
        style: { width: 0, left: 0 },
        hover: false,
        active: {},
      },
      underlineList: [
        { width: "67px", left: 0 },
        { width: "84px", left: "105px" },
        { width: "84px", left: "227px" },
      ],
    }
  },
  computed: {
    underlineStyle() {
      return this.underline.hover ? this.underline.active : this.underline.style
    },
  },
  beforeUpdate() {
    const routes = ["About", "Projects", "Contact"]
    const activeRoute = routes.indexOf(this.$route.name)
    this.underline.style = this.underlineList[activeRoute]
  },
  methods: {
    mouseover(value) {
      this.underline.hover = true
      this.underline.active = this.underlineList[value]
    },
    mouseleave() {
      this.underline.hover = false
    },
    click(value) {
      this.underline.style = this.underlineList[value]
    },
  },
}
</script>

<style lang="scss">
html {
  background: #232325;
  color: #dbdbdb;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @media (min-width: 715px) {
    width: 700px;
    margin: 0 auto;
  }
  @media (min-width: 915px) {
    width: 900px;
    margin: 0 auto;
  }
}

h2 {
  font-family: "Hind", sans-serif;
  font-size: 2rem;
}

a {
  color: #dbdbdb;
  text-decoration: none;

  &:visited {
    color: #06aee0;
  }
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 0 0 0;
  margin: 0 0 15px 0;
  z-index: 9999;
  background: #232325;
  font-family: "Hind", sans-serif;

  @media (min-width: 715px) {
    width: 700px;
  }
  @media (min-width: 915px) {
    width: 900px;
  }

  a {
    position: relative;
    padding: 0 2rem 0 0;
    font-weight: bold;
    font-size: 1.5em;
    color: #dbdbdb;
    font-weight: 600;
    text-decoration: none;
  }

  .underline {
    height: 4px;
    position: absolute;
    bottom: 1px;
    background: #06aee0;
    -webkit-transition: 100ms all ease-in-out;
    transition: 100ms all ease-in-out;
  }
}

.main {
  margin: 120px 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease;
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
