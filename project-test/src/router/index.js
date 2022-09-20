// eslint-disable-next-line vue/multi-word-component-names
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: '/test',
    component: () => import('@/views/test/test5-8.vue')
  },
  {
    path: '/component',
    name: '/component',
    component: () => import('@/views/teacher/component.vue')
  },
  {
    path: '/father',
    name: '/father',
    component: () => import('@/views/son/father.vue')
  },
  {
    path: '/son',
    name: '/son',
    component: () => import('@/views/son/son.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
