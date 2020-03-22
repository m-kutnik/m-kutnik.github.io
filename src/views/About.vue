<template>
  <article class="section about container is-thin">
    <h1 class="h3">About me 👨‍💻</h1>
    <p class="size-5">
      My name is Michał Kutnik. I'm a {{ age }} years old self-taught Javascript
      developer located in <del>Rzeszów</del> <ins>Wrocław</ins> specializing in
      web development with Vue.js. I work to create intuitive web interfaces,
      focusing on every small detail to get an over-all user experience to the
      next level.
    </p>
    <p class="size-5">
      I grew up with computers and technology all around me. I was always
      fascinated by everyday things, so I started disassembling them to see
      what's inside and how they work. Thank God they still worked fine after
      assembling them back. When I was a child my
      <em class="no-break">[information removed]</em>
      taught me how I can crack a Satellite TV box to unlock my favorite
      cartoons (but shhh, don't tell the police). My adventure with
      <em>"programming"</em> started when I was 12 and got my first
      <em>own</em> PC. I used it to host the private Metin2 server I created for
      me and my friends. It was using my scripts written in LUA to customize the
      game's behavior. They were written in a very
      <em>"change things and see what has changed"-ish</em> manner, but hey... I
      was 12.<br />
      <span class="no-break">That's how I got hooked in... ¯\_(ツ)_/¯</span>
    </p>
    <p class="size-5">I decided to get into web development.</p>
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
