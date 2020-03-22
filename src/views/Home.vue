<template>
  <main>
    <home-greetins />
    <home-resume />
  </main>
</template>
<script>
import HomeGreetins from '@/views/Home/HomeGreetings'
import HomeResume from '@/views/Home/HomeResume'

export default {
  name: 'Home',
  components: {
    HomeGreetins,
    HomeResume,
  },
}
</script>
