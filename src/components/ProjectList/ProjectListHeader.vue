<template>
  <div class="flex">
    <project-list-tags />
    <project-list-search class="item-right" />
  </div>
</template>

<script>
import ProjectListTags from './ProjectListTags'
import ProjectListSearch from './ProjectListSearch'

export default {
  name: 'ProjectListHeader',
  components: {
    ProjectListTags,
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
