<template functional>
  <article id="resume" class="section resume is-dark">
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
        <h2 class="h5"><strong>Technologies &amp; Skills</strong></h2>
        <article>
          <ul>
            <li class="h5">Vue (2 &amp; 3)</li>
            <li class="h5">JavaScript ES6+</li>
            <li class="h5">HTML5</li>
            <li class="h5">CSS + SCSS</li>
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
          </ul>
        </article>
        <h2 class="h5"><strong>Learning</strong></h2>
        <article>
          <ul>
            <li class="h5">TypeScript</li>
            <li class="h5">Deno + Node</li>
            <li class="h5">AWS</li>
          </ul>
        </article>
        <h2 class="h5"><strong>Languages</strong></h2>
        <article>
          <ul>
            <li class="h5">Polish <em>(native)</em></li>
            <li class="h5">English <em>(CEFR B2)</em></li>
          </ul>
        </article>
      </div>
      <div class="about text-centered">
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

.resume {
  background: var(--tertiary);
}

.is-dark .resume {
  background: #272727;
}

ul {
  list-style-type: none;
  margin-block-end: 0;
  margin-block-start: 0;
  padding-inline-start: 0;

  & li {
    margin-bottom: 0;
  }
}

.grid {
  display: grid;
  flex: 1;
  column-gap: 2rem;
  grid-template-columns: 40% 60%;
  row-gap: 2rem;

  @media screen and (max-width: 480px) {
    justify-content: center;
    grid-template-columns: auto;
  }
}

.about {
  margin-top: 4rem;
}
</style>
