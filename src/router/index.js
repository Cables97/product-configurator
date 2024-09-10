import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/configurator',
      name: "configurator",
      component: () => import("@/views/ConfiguratorView.vue"),
      children: [

        {
          path: 'size',
          name: 'size',
          component: () => import('@/views/config_views/SizeView.vue')
        },

        {
          path: 'scent',
          name: 'scent',
          component: () => import('@/views/config_views/ScentView.vue')
        },


      ]
    },






  ]
})

export default router
