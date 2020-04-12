const runtime = {}

export const getVM = () => {
  if (runtime.vm) return runtime.vm
  throw new ReferenceError('Not found Vue instance')
}

export default function install(Vue) {
  Vue.mixin({
    beforeCreate(vue) {
      const vm = this || vue
      if (typeof vm.$options.setup === 'function') {
        runtime.vm = vm
      }
    },
  })
}
