<template functional>
  <article id="resume" class="section tech is-dark">
    <div class="container is-thin">
      <div class="grid">
        <h2 class="h5"><strong>Experience</strong></h2>
        <article>
          <section>
            <h3 class="h5">TechMinds sp. z o.o.</h3>
            <p class="subtitle">
              <span class="size-6">Frontend Developer</span><br />
              <em><time datetime="2019-04">April 2019</time> - now</em>
            </p>
          </section>
          <section>
            <h3 class="h5">Onyx Studio</h3>
            <p class="subtitle">
              <span class="size-6">Freelancer</span><br />
              <em><time datetime="2017-01">January 2017</time> - now</em>
            </p>
          </section>
        </article>
        <h2 class="h5"><strong>Technologies / Skills</strong></h2>
        <article>
          <ul>
            <li class="h5">Vue (2 &amp; 3)</li>
            <li class="h5">JavaScript ES6+</li>
            <li class="h5">CSS + SCSS</li>
            <li class="h5">HTML5</li>
            <li class="h5">Webpack + Babel</li>
            <li class="h5">RESTful architecture</li>
            <li class="h5">Jest</li>
          </ul>
        </article>
        <h2 class="h5"><strong>Tools</strong></h2>
        <article>
          <ul>
            <li class="h5">Gitlab CI/CD</li>
            <li class="h5">Github Actions</li>
            <li class="h5">VS Code</li>
            <li class="h5">Emmet</li>
          </ul>
        </article>
        <h2 class="h5"><strong>Learning</strong></h2>
        <article>
          <ul>
            <li class="h5">TypeScript</li>
            <li class="h5">Deno</li>
            <li class="h5">AWS</li>
          </ul>
        </article>
      </div>
      <div class="text-centered">
        <router-link to="/about" class="underline size-5">
          <strong>More about me</strong>
        </router-link>
      </div>
    </div>
  </article>
</template>
<style lang="scss" scoped>
strong {
  font-weight: bold;
}

.tech {
  background: var(--tertiary);
}

.is-dark .tech {
  background: #272727;
}

ul {
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;

  & li {
    margin-bottom: 0;
  }
}

.grid {
  flex: 1;
  display: grid;
  grid-template-columns: 40% 60%;
  column-gap: 2rem;
  row-gap: 2rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
    justify-content: center;
  }
}
</style>
