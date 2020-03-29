import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      const element = document.querySelector(to.hash)
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        })
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
})

export default router
