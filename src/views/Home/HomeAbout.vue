<template functional>
  <article id="about" class="section container is-thin">
    <section id="automation" class="flex">
      <div class="is-8">
        <h2 class="h4">
          F*ck it, <em><strong>automate it!</strong></em>
        </h2>
        <p class="size-5">
          I use Node and Puppeteer for tasks automation. Don't worry about
          boring repetitive tasks. Focus on what's important and let the scripts
          do the rest.
        </p>
      </div>
      <div clas="is-4">
        <div class="animation">
          <lottie-animation
            path="lotties/automation.json"
            :speed="0.7"
            :auto-play="true"
          />
        </div>
      </div>
    </section>
    <section id="ci" class="flex">
      <div class="is-8">
        <h2 class="h4">
          Build fast, <em><strong>deliver faster</strong></em>
        </h2>
        <p class="size-5">
          I have commercial experience with Gitlab CI/CD and I'm able to create
          pipelines covering build, testing, and automatic deploy of the
          project. Automation, automation, automation!
        </p>
      </div>
      <div clas="is-4">
        <div class="animation">
          <lottie-animation
            path="lotties/rocket.json"
            :speed="0.6"
            :auto-play="true"
          />
        </div>
      </div>
    </section>
    <section id="ideas" class="flex">
      <div class="is-8">
        <h2 class="h4">
          Replace <em><strong>imagination</strong></em
          ><br />
          with the <em><strong>realization</strong></em>
        </h2>
        <p class="size-5">
          Turning ideas into reality is not a simple task, but I know people you
          will need in the whole process. Starting from application architecture
          and design, ending on infrastructure and deployment- we are ready to
          help you.
          <router-link to="contact" class="underline"
            ><strong>Contact me</strong></router-link
          >
        </p>
      </div>
      <div clas="is-4">
        <div class="animation">
          <lottie-animation
            path="lotties/discovery.json"
            :speed="0.6"
            :auto-play="true"
          />
        </div>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 48rem) {
  .flex {
    flex-direction: column-reverse;
  }

  .flex > * {
    margin: 0;
  }

  .animation {
    height: 250px;
  }
}
</style>
