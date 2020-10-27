import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import ViewSite from '@/components/ViewSite'
import NewSite from '@/components/NewSite'
import EditSite from '@/components/EditSite'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    requiresAuth: false
  },

  {
    path: '/new',
    name: 'new-site',
    component: NewSite,
    requiresAuth: false
  },
  {
    path: '/:site_id',
    name: 'view-site',
    component: ViewSite,
    requiresAuth: false
  },
  {
    path: '/edit/:site_id',
    name: 'edit-site',
    component: EditSite,
    requiresAuth: false
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
