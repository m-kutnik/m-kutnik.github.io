<template>
  <article class="section">
    <div class="container is-thin">
      <h1 class="h3">My projects 🦥</h1>
      <p class="size-5">Search by name, technology, anything you want...</p>
    </div>
    <div class="container">
      <project-list :items="projects" />
    </div>
  </article>
</template>

<script>
/* eslint-disable global-require */
import ProjectList from '@/components/ProjectList'

const TAGS = {
  VUE: ['vue', 'vuejs', 'vue.js'],
  JS: ['js', 'javascript', 'es6'],
  NODE: ['node', 'nodejs', 'node.js'],
  HTML: ['html5', 'html'],
  SCSS: ['scss', 'sass', 'css', 'css3'],
  GCP: ['gcp', 'google', 'cloud', 'platform'],
}

const TYPES = {
  UTILITY: 'Utility',
  APP: 'App',
}

const TECH = {
  VUE: { name: 'Vue.js', icon: 'IconVue' },
  JS: { name: 'Javascript', icon: 'IconJavascript' },
  NODE: { name: 'Node.js', icon: 'IconNode' },
  HTML: { name: 'HTML5', icon: 'IconHtml' },
  SCSS: { name: 'SCSS', icon: 'IconSass' },
  GCP: { name: 'Google Cloud Platform', icon: 'IconGcp' },
}

export default {
  name: 'Projects',
  components: {
    ProjectList,
  },
  setup() {
    const projects = [
      {
        name: '<span style="font-weight: bold;">Y</span>ΛƬΛ',
        description: 'Yet Another Twitch Autoclicker',
        type: TYPES.UTILITY,
        technologies: [TECH.JS],
        tags: [...TAGS.JS],
        repo: 'https://github.com/m-kutnik/yata-twitch-autoclicker',
        background:
          'linear-gradient(200deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        hovered: false,
        image: require('@/assets/images/yata.png'),
      },
      {
        name: 'Gitlab Contribution Sync',
        description: 'Sync you Gitlab contributions with Github!',
        type: TYPES.UTILITY,
        technologies: [TECH.NODE],
        tags: [...TAGS.NODE, ...TAGS.JS],
        repo: 'https://github.com/m-kutnik/gitlab-contribution-sync',
        background:
          'linear-gradient(160deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        hovered: false,
        image: require('@/assets/images/gitlab-sync.png'),
      },

      {
        name: 'Dwarf.css',
        description: 'A tiny CSS Framework to Make Your Life Easier™',
        type: TYPES.UTILITY,
        technologies: [TECH.SCSS],
        tags: [...TAGS.SCSS, ...TAGS.HTML],
        background:
          'linear-gradient(-20deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        image: require('@/assets/images/dwarf.png'),
      },
      {
        name: 'Project Makaron',
        description: 'Automated websites testing with visual regression tool',
        type: TYPES.UTILITY,
        technologies: [TECH.NODE],
        tags: [...TAGS.NODE, ...TAGS.JS],
        background:
          'linear-gradient(20deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        image: require('@/assets/images/makaron.png'),
      },
      {
        name: 'Spotify Scoreboard',
        description: 'Statistics about your Spotify collaborative playlists',
        type: TYPES.APP,
        technologies: [TECH.VUE, TECH.JS],
        tags: [...TAGS.VUE, ...TAGS.JS, 'oauth'],
        background:
          'linear-gradient(200deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        image: require('@/assets/images/spotify.png'),
      },
      {
        name: 'Bulma Themes',
        description: 'Theme generator for Bulma CSS, with live-preview',
        type: TYPES.APP,
        technologies: [TECH.VUE, TECH.NODE, TECH.HTML, TECH.GCP],
        tags: [
          ...TAGS.VUE,
          ...TAGS.JS,
          ...TAGS.NODE,
          ...TAGS.HTML,
          ...TAGS.GCP,
        ],
        background:
          'linear-gradient(160deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        image: require('@/assets/images/bulma.png'),
      },
      {
        name: 'Project NORA',
        description: 'Twitch chat assistant with a viewer engagement system.',
        type: TYPES.APP,
        technologies: [TECH.VUE, TECH.NODE, TECH.HTML, TECH.GCP],
        tags: [
          ...TAGS.VUE,
          ...TAGS.JS,
          ...TAGS.NODE,
          ...TAGS.HTML,
          ...TAGS.GCP,
          'websocket',
          'ws',
          'irc',
        ],
        background:
          'linear-gradient(-20deg, rgba(154,55,156,1) 15%, rgba(41,100,152,1) 56%, rgba(0,170,154,1) 100%)',
        image: require('@/assets/images/nora.png'),
      },
    ]

    return { projects }
  },
}
</script>
