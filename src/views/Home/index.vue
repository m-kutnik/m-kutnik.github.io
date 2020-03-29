<template>
  <main>
    <home-greetins />
    <home-resume />
    <home-about />
    <home-projects />
  </main>
</template>
<script>
import HomeGreetins from './HomeGreetings'
import HomeResume from './HomeResume'
import HomeAbout from './HomeAbout'
import HomeProjects from './HomeProjects'

export default {
  name: 'Home',
  components: {
    HomeGreetins,
    HomeResume,
    HomeAbout,
    HomeProjects,
  },
}
</script>
