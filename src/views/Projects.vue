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

const NODE_TAGS = ['node', 'nodejs', 'node.js']
const JAVASCRIPT_TAGS = ['js', 'javascript', 'es6']
const HTML_TAGS = ['html5', 'html']
const CSS_TAGS = ['scss', 'sass', 'css']
const VUE_TAGS = ['vue', 'vuejs', 'vue.js']
const GCP_TAGS = ['gcp', 'google', 'cloud', 'platform']

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
        tags: ['Utility'],
        technologies: [...NODE_TAGS, ...JAVASCRIPT_TAGS],
        background:
          'linear-gradient(135deg, rgba(252,109,38,1) 0%, rgba(131,58,180,1) 100%)',
        hovered: false,
        image: require('@/assets/images/gitlab-sync.png'),
      },
      {
        name: 'Yata - Twitch Autoclicker',
        descriptions: 'Test1',
        tags: ['Utility'],
        technologies: [...JAVASCRIPT_TAGS],
        image: require('@/assets/images/gitlab-sync.png'),
      },
      {
        name: 'Dwarf.css',
        descriptions: 'Test1',
        tags: ['Utility'],
        technologies: [...HTML_TAGS, ...CSS_TAGS],
        image: require('@/assets/images/gitlab-sync.png'),
      },
      {
        name: 'Project Makaron.js',
        descriptions: 'Test1',
        tags: ['Utility'],
        technologies: [...NODE_TAGS, ...JAVASCRIPT_TAGS],
        image: require('@/assets/images/gitlab-sync.png'),
      },
      {
        name: 'Spotify Scoreboard',
        descriptions: 'Test1',
        tags: ['App'],
        technologies: [
          ...VUE_TAGS,
          ...NODE_TAGS,
          ...JAVASCRIPT_TAGS,
          'lodash',
          'oauth',
        ],
        image: require('@/assets/images/gitlab-sync.png'),
      },
      {
        name: 'Bulma Themes',
        descriptions: 'Test1',
        tags: ['App'],
        technologies: [
          ...VUE_TAGS,
          ...NODE_TAGS,
          ...JAVASCRIPT_TAGS,
          ...HTML_TAGS,
          ...GCP_TAGS,
        ],
        image: require('@/assets/images/gitlab-sync.png'),
      },
      {
        name: 'Project NORA',
        descriptions: 'Test1',
        tags: ['App'],
        technologies: [
          ...VUE_TAGS,
          ...HTML_TAGS,
          ...JAVASCRIPT_TAGS,
          ...GCP_TAGS,
          'websocket',
          'ws',
          'irc',
        ],
        image: require('@/assets/images/gitlab-sync.png'),
      },
    ]

    return { projects }
  },
}
</script>
