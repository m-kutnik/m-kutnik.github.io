<template>
  <section>
    <project-list-header :tags="tags" />
    <div class="project-container">
      <transition-group class="list" name="list" tag="ul">
        <li
          v-for="item in filteredItems"
          :key="item.name"
          class="project"
          :class="item.size"
        >
          <h2>{{ item.name }}</h2>
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useQuery } from '@/use/router'
import ProjectListHeader from './ProjectListHeader'

export default {
  name: 'ProjectList',
  components: {
    ProjectListHeader,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { search } = useQuery()

    const tagsArray = props.items.flatMap(item => [
      ...item.tags,
      ...item.technologies,
    ])
    const tags = new Set(tagsArray)

    const filteredItems = computed(() =>
      props.items.filter(item => {
        return item.name.toLowerCase().includes(search.value.toLowerCase())
      }),
    )

    return { filteredItems, tags }
  },
}
</script>

<style lang="scss" scoped>
section {
  margin: 6rem 0;
}

.project {
  background: hsla(0, 0%, 50%, 0.15);
  padding: 20px;
  grid-column: span 1;

  &.big {
    grid-column: span 2;

    @media screen and (max-width: 48rem) {
      grid-column: span 1;
    }
  }
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  grid-auto-flow: dense;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  backface-visibility: hidden;
  z-index: 1;

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
    transition: opacity 300ms ease-in;
    z-index: 0;
  }

  /* appear at / disappear to */
  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
