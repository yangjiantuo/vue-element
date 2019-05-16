/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: '考勤管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '会议签到管理', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: '考勤申诉管理', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '外出（出差）审批', noCache: true }
    },
    {
      path: 'mi',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '请假审批', noCache: true }
    },
    {
      path: 'art',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: '加班审批', noCache: true }
    }
  ]
}

export default chartsRouter
