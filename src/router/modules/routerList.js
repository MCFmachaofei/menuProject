import Layout from '@/views/layout/layout'

// 首页
export const home = {
  path: '/home',
  name: 'home',
  component: Layout,
  redirect: '/home/iframe',
  children: [
    {
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/home/index.vue')
    }
  ]
}
// 个人画像
export const personalPortrait = {
  path: '/personalPortrait',
  name: 'personalPortrait',
  meta: { role: ['admin'] },
  component: Layout,
  redirect: '/personalPortrait/iframe',
  children: [
    {
      // 学生画像
      path: 'inner/:pathIndex/:browsePath',
      name: 'inner',
      component: () => import('@/views/personalPortrait/iframe/inner.vue')
    },
    {
      // iframe
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/personalPortrait/iframe/iframe.vue')
    },
    {
      // 教师画像
      path: 'teacher/:tId/:curId/:panelId/:siteId/:skipType',
      name: 'teacher',
      component: () => import('@/views/personalPortrait/iframe/teacher.vue')
    }
  ]
}
// 校务分析
export const analysis = {
  path: '/analysis',
  name: 'analysis',
  component: Layout,
  redirect: '/analysis/iframe',
  children: [
    {
      // index
      path: 'index',
      name: 'index',
      query: {
        src: 'test'
      },
      component: () => import('@/views/analysis/index.vue'),
      children: [
        {
          // index
          path: 'innerIframe/:menuId/:panelId/:siteId/:curId/:skipType', // skipType:current/another (引导页/其他入口)
          name: 'innerIframe',
          query: {
            src: 'test'
          },
          component: () => import('@/views/analysis/iframe/inner.vue')
        }
      ]
    },

    {
      // iframe
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/analysis/iframe/iframe.vue')

    }

  ]
}
// deck 领导驾驶舱
export const deck = {
  path: '/deck',
  name: 'deck',
  component: Layout,
  redirect: '/deck/iframe',
  children: [
    {
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/deck/index.vue')
    }
  ]
}
// iframe
export const iframe = {
  path: '/iframe',
  name: 'iframe',
  component: () => import('@/views/iframe/index.vue')
}
// 指标管理
export const targetManage = {
  path: '/targetManage',
  name: 'targetManage',
  component: Layout,
  redirect: '/targetManage/iframe',
  children: [
    {
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/targetManage/index.vue')
    }
  ]
}
// 灵活查询
export const quickQuery = {
  path: '/quickQuery',
  name: 'quickQuery',
  component: Layout,
  redirect: '/quickQuery/iframe',
  children: [
    {
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/quickQuery/index.vue')
    }
  ]
}

// 个人中心
export const personalCenter = {
  path: '/personalCenter',
  name: 'personalCenter',
  component: Layout,
  redirect: '/personalCenter/iframe',
  children: [
    {
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/personalCenter/index.vue')
    }
  ]
}

// 学生画像
export const studentPortrait = {
  path: '/studentPortrait',
  name: 'studentPortrait',
  component: Layout,
  redirect: '/studentPortrait/iframe',
  children: [
    {
      // 学生画像
      path: 'inner/:pathIndex/:browsePath',
      name: 'inner',
      component: () => import('@/views/studentPortrait/iframe/inner.vue')
    },
    {
      // 学生画像引导页
      path: 'iframe',
      name: 'iframe',
      component: () => import('@/views/studentPortrait/iframe/index.vue')
    }
  ]
}
