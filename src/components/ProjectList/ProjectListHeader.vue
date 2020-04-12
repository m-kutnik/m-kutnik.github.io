<template>
  <div>
    <project-list-search class="is-5 item-right" />
  </div>
</template>

<script>
import ProjectListSearch from './ProjectListSearch'

export default {
  name: 'ProjectListHeader',
  components: {
    ProjectListSearch,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 48rem) {
  .item-right {
    margin-left: auto;
  }
}
</style>
