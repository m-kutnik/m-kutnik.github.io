export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/',
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
]
