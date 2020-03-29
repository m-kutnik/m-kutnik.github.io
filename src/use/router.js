import { computed } from '@vue/composition-api'
import router from '@/router'
import { getVM } from './hooks'

export const useQuery = () => {
  const vm = getVM()
  const query = computed(() => vm.$route.query)
  const search = computed(() => query.value.search || '')
  const tags = computed(() => query.value.tags)

  const update = params =>
    router.replace({ query: { ...vm.$route.query, ...params } }).catch(() => {})

  return { query, search, tags, update }
}
