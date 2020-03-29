<template>
  <article class="section about container is-thin">
    <h1 class="h3">About me 👨‍💻</h1>
    <p class="size-5">
      My name is Michał Kutnik. I'm a {{ age }} years old self-taught Javascript
      developer located in <del>Rzeszów</del> <ins>Wrocław</ins> specializing in
      web development with Vue.js. My goal is to build intuitive web interfaces,
      focusing on every detail to get an over-all user experience to the next
      level.
    </p>
    <!-- <p class="size-5">
      I grew up with computers and technology all around me. My
      <em class="no-break">[information removed]</em>
      taught me how to crack a Satellite TV box, so I could unlock my favorite
      cartoons by myself (but shh, don't tell the police). I started my
      adventure with <em>"programming"</em> when I was 12 y/o and got my first
      <em>own</em> PC. I used that piece of silicon to host a private Metin2
      server for me and my friends. The server used my own LUA scripts to
      customize the game's behavior. They were written in a very
      <em>"modify code and see what's changed"</em>-ish manner, but hey... I was
      12.<br />
      That's how <span class="no-break">I got hooked in... ¯\_(ツ)_/¯</span>
    </p> -->
    <p class="size-5"><em>More from me soon...</em></p>
  </article>
</template>

<script>
export default {
  name: 'About',
  setup() {
    const age = new Date().getFullYear() - 1998

    return { age }
  },
}
</script>
<style lang="scss" scoped>
ins {
  text-decoration: none;
}
</style>
