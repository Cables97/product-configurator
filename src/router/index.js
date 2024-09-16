import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ConfiguratorView from '@/views/ConfiguratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: "configurator",
      component: ConfiguratorView,
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
