export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About'),
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact'),
  },
  {
    path: '/404-not-found',
    name: '404',
    component: () => import('@/views/404'),
  },
  {
    path: '*',
    redirect: '/404-not-found',
  },
]
