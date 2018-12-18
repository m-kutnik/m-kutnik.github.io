<template>
  <section class="about main">
    <h2>Greetings, Traveler 👋</h2>
    <p>
      My name is Michał Kutnik but call me Mike. I'm {{ age() }} y/o Front-end
      Developer from Rzeszów, Poland (but I'm willing to move). I've been
      working as JS Developer and certified IT Technician since 2015. I'm
      interested in cybersecurity and I would like to develop myself in that
      field. Open Source world is my second home.
    </p>
    <h2>Technologies and so on... 🤖</h2>
    <p>
      I know <b>HTML5, CSS3, SCSS, and UX/UI</b>. My beloved JS framework is
      <b>VueJS</b>. I code in <b>VSCode</b> with tools like <b>Emmet</b> and
      <b>Prettier</b> on daily basis. My VCS? <b>Git</b> ..., and I host my
      projects on Github and Gitlab. In my projects, I use <b>Webpack</b> for
      bundling. <b> 🧶 Yarn > NPM</b>
    </p>
    <p>My life goal is to create <b>GLaDOS</b></p>
    <RouterLink to="/projects"><h2>Some of my projects 👈</h2></RouterLink>
  </section>
</template>
<script>
export default {
  name: "About",
  methods: {
    age() {
      const date = new Date()
      return date.getFullYear() - 1998
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  line-height: 2.5em;
  font-size: 16px;
  padding: 0 0 40px 0;
}
</style>
