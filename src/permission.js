import router from './router'
import { childRouterMap, asyncRouterMap } from '@/router'

// import NProgress from 'nprogress' // Progress 进度条
// import 'nprogress/nprogress.css'// Progress 进度条样式
import store from './store'

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
    return
  }
  // NProgress.start()
  let asynRouter = asyncRouterMap

  if (store.getters.nav === null) {
    store.dispatch('getNavInfo', (res) => {
      for (let i in res) {
        if (res[i].url === null) {
          continue
        }
        asynRouter.push(childRouterMap['' + res[i].url + ''])
      }

      router.addRoutes(asynRouter)
      for (const data of asynRouter) {
        router.options.routes.push(data)
      }
      if (to.fullPath.indexOf('/analysis/index/innerIframe/') === -1) {
        store.commit('curNavId', res[0].id)
        var defaultRoutes = '/' + res[0].url + '/iframe'
        next(defaultRoutes)
      } else {
        next({
          path: to.fullPath
        })
      }
    })
  } else {
    next()
  }
  // NProgress.done()
})

router.afterEach(() => {
  // NProgress.done() // 结束Progress
})
