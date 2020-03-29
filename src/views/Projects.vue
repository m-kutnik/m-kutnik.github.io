<template>
  <article class="section">
    <div class="container is-thin">
      <h1 class="h3">My projects 🦥</h1>
    </div>
    <div class="container">
      <project-list :items="projects" />
    </div>
  </article>
</template>

<script>
import ProjectList from '@/components/ProjectList'

export default {
  name: 'Projects',
  components: {
    ProjectList,
  },
  setup() {
    const projects = [
      {
        name: 'Gitlab Contribution Sync',
        descriptions: 'Test1',
        size: 'big',
        tags: ['Utility'],
        technologies: ['Node', 'JS'],
      },
      {
        name: 'Yata - Twitch Autoclicker',
        descriptions: 'Test1',
        tags: ['Utility'],
        technologies: ['JS'],
      },
      {
        name: 'Dwarf.css',
        descriptions: 'Test1',
        tags: ['Utility'],
        technologies: ['SCSS', 'HTML5'],
      },
      {
        name: 'Project Makaron.js',
        descriptions: 'Test1',
        tags: ['Utility'],
        technologies: ['Node', 'JS'],
      },
      {
        name: 'Spotify Scoreboard',
        descriptions: 'Test1',
        tags: ['App'],
        technologies: ['Vue', 'HTML5', 'JS', 'Lodash', 'OAuth'],
      },
      {
        name: 'Bulma Themes',
        descriptions: 'Test1',
        tags: ['App'],
        technologies: ['Vue', 'HTML5', 'JS', 'GCP'],
      },
      {
        name: 'Project NORA',
        descriptions: 'Test1',
        tags: ['App'],
        technologies: ['Vue', 'HTML5', 'JS', 'GCP', 'WebSocket', 'IRC'],
      },
    ]

    return { projects }
  },
}
</script>

<style></style>
