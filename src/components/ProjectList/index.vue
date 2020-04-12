<template>
  <section class="section">
    <project-list-header />
    <div class="project-container">
      <transition-group class="list" name="list" tag="ul">
        <project-list-item
          v-for="item in filteredItems"
          :key="item.name"
          :item="item"
        />
      </transition-group>
    </div>
  </section>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useQuery } from '@/use/router'
import ProjectListHeader from './ProjectListHeader'
import ProjectListItem from './ProjectListItem'

export default {
  name: 'ProjectList',
  components: {
    ProjectListHeader,
    ProjectListItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
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

    return { filteredItems }
  },
}
</script>

<style lang="scss" scoped>
.section {
  margin: 6rem 0;
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
