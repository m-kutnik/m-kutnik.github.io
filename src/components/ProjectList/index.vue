<template>
  <section class="section">
    <project-list-header />
    <div class="project-container">
      <transition-group class="list" name="list" tag="ul">
        <li
          v-for="item in filteredItems"
          :key="item.name"
          class="project-wrapper"
          :class="item.size"
          @mouseenter="item.hovered = true"
          @mouseleave="item.hovered = false"
        >
          {{ item.backgroundStyle }}
          <div
            class="project-background"
            :style="`background: ${item.background}`"
          />
          <div class="project-summary">
            <h2>{{ item.name }}</h2>
          </div>
          <app-image-wrapper
            class="project-image"
            :image="item.image"
            :alt="item.alt"
          />
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import { useQuery } from '@/use/router'
import AppImageWrapper from '@/components/AppImageWrapper'
import ProjectListHeader from './ProjectListHeader'

export default {
  name: 'ProjectList',
  components: {
    ProjectListHeader,
    AppImageWrapper,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const isHovered = ref(false)
    const { search } = useQuery()

    const filteredItems = computed(() => {
      if (!search.value) {
        return props.items
      }

      return props.items.filter(item => {
        const values = Object.values(item)
          .flat()
          .filter(value => typeof value === 'string')
          .map(value => value.toLowerCase())

        return values.some(element =>
          element.includes(search.value.toLowerCase()),
        )
      })
    })

    return { isHovered, filteredItems }
  },
}
</script>

<style lang="scss" scoped>
.section {
  margin: 6rem 0;
}

.project-background {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: scale(0.9, 0.9);
  transition: all 0.3s var(--transition-function);
}

.project-image {
  position: relative;
  z-index: 2;
  width: 100%;
  height: auto;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s var(--transition-function),
    transform 0.3s var(--transition-function);
}

.project-summary {
  position: absolute;
  z-index: 2;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 10px;
  margin: 20px;
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
  overflow: hidden;
  background: hsla(0, 0%, 50%, 0.15);
  grid-column: span 1;

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
    transform: translateY(200px);
  }

  &:hover .project-summary {
    opacity: 1;
    transform: scale(1, 1);
  }
}

.list {
  z-index: 1;
  display: grid;
  justify-content: center;
  padding: 0;
  backface-visibility: hidden;
  grid-auto-flow: dense;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  list-style-type: none;

  @media screen and (max-width: 48rem) {
    grid-template-columns: 1fr;
  }

  /* moving */
  &-move {
    transition: opacity 300ms ease-in-out 50ms;
  }

  /* appearing */
  &-enter-active {
    transition: opacity 300ms ease-out;
  }

  /* disappearing */
  &-leave-active {
    z-index: 0;
    transition: opacity 300ms ease-in;
  }

  /* appear at / disappear to */
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
