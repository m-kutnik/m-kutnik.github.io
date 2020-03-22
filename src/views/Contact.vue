<template>
  <article class="section contact container is-thin">
    <h1 class="h3">Let's get in touch 🤙</h1>
    <p class="subtitle is-spaced">
      <em>
        looking for a contributor to your OSS project?<br />
        have some one million dollar ideas?<br />
        want me in your team?<br /><br />
        <strong>I'm open to new possibilities.</strong>
      </em>
    </p>
    <p class="social-links">
      <a href="http://bit.ly/mk-gthb" target="_blank" rel="noopener noreferrer"
        ><icon-github />
      </a>
      <a
        href="http://bit.ly/mk-lnkdin"
        target="_blank"
        rel="noopener noreferrer"
        ><icon-linkedin
      /></a>
    </p>
  </article>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang="scss" scoped>
.social-links a {
  stroke: rgba(139, 139, 139, 0.5);
  padding: 5px;

  &:hover {
    stroke: var(--link);
  }
}
</style>
