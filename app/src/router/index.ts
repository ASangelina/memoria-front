import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/explore',
      name: 'map-explorer',
      component: () => import('../views/MapExplorerView.vue')
    },
    {
      path: '/personalities',
      name: 'personalities',
      component: () => import('../views/PersonalitiesView.vue')
    },
    {
      path: '/personalities/:id',
      name: 'personality-detail',
      component: () => import('../views/PersonalityDetailView.vue')
    },
    {
      path: '/monuments',
      name: 'monuments',
      component: () => import('../views/MonumentsView.vue')
    },
    {
      path: '/monuments/:id',
      name: 'monument-detail',
      component: () => import('../views/MonumentDetailView.vue')
    },
    {
      path: '/routes',
      name: 'routes',
      component: () => import('../views/RoutesView.vue')
    },
    {
      path: '/routes/:id',
      name: 'route-detail',
      component: () => import('../views/RouteDetailView.vue')
    }
  ]
})

export default router