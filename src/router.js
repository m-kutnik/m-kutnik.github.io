import Vue from "vue"
import Router from "vue-router"
const About = () => import("./views/About")
const Projects = () => import("./views/Projects")
const Contact = () => import("./views/Contact")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "About",
      component: About,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
})
