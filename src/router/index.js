import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/layout'
import {
  personalPortrait,
  analysis,
  iframe,
  deck,
  personalCenter,
  targetManage,
  quickQuery,
  home,
  studentPortrait
} from './modules/routerList.js'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '*/',
    component: Layout
    // redirect:''
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  }

  // {
  //   path: '/iframe',
  //   component: () => import('@/views/iframe/index'),
  //   hidden: true
  // }
]
export const asyncRouterMap = [
  // path: '/',
  // name: '',
  // component: Layout,
  // children: [
  // {
  //   path: '/iframe/:id',
  //   name: 'iframe',
  //   component: () => import('@/views/iframe/index.vue')
  // }
  // ]
]

export const childRouterMap = {
  home: home,
  personalPortrait: personalPortrait,
  analysis: analysis,
  deck: deck,
  iframe: iframe,
  personalCenter: personalCenter,
  targetManage: targetManage,
  quickQuery: quickQuery,
  studentPortrait: studentPortrait
}

// export const routerMap = [

// ]
// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: routerMap

//   // {
//   //   path: '/about',
//   //   name: 'about',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import('./views/About.vue')
//   // }
//   // ]
// })
// 实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap
})
