<template>
  <li
    class="project-wrapper"
    :class="item.size"
    @mouseenter="item.hovered = true"
    @mouseleave="item.hovered = false"
  >
    <div class="project-background" :style="`background: ${item.background}`" />
    <div class="project-summary">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <h2 class="h4" v-html="item.name"></h2>
      <p class="subtitle size-6">{{ item.description }}</p>
      <p class="size-6">
        <a
          v-if="item.repo"
          :href="item.repo"
          class="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repo
        </a>
      </p>

      <ul class="technologies">
        <li v-for="tech in item.technologies" :key="tech.name">
          <app-icon-with-text :text="tech.name" :icon="tech.icon" />
        </li>
      </ul>
    </div>
    <app-image-wrapper
      class="project-image"
      :image="item.image"
      :alt="item.alt"
    />
  </li>
</template>

<script>
import AppIconWithText from '@/components/AppIconWithText'
import AppImageWrapper from '@/components/AppImageWrapper'

export default {
  name: 'ProjectListItem',
  components: { AppIconWithText, AppImageWrapper },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.project-background {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.9, 0.9);
  transition: transform 0.3s var(--transition-function);
}

.project-image {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: auto;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s var(--transition-function),
    transform 0.3s var(--transition-function);
}

.project-summary {
  position: relative;
  z-index: 2;
  display: flex;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 2rem;
  background: #fff;
  opacity: 0;
  transition: opacity 0.3s var(--transition-function),
    transform 0.3s var(--transition-function);

  .is-dark & {
    background: #272727;
  }
}

.project-wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: hsla(0, 0%, 50%, 0.15);
  grid-column: span 1;
  transform: translateZ(0);
  will-change: transform;

  &.big {
    grid-column: span 2;

    @media screen and (max-width: 48rem) {
      grid-column: span 1;
    }
  }

  &:hover .project-background {
    transform: scale(1, 1);
  }

  &:hover .project-image {
    opacity: 0;
    pointer-events: none;
    transform: translateY(200px);
  }

  &:hover .project-summary {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.technologies {
  display: flex;
  padding: 0;
  padding-top: 1rem;
  margin-top: auto;
  font-size: 2rem;
  list-style-type: none;

  > * {
    margin-right: 1rem;
  }
}
</style>
