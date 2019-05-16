/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  name: 'Nested',
  meta: {
    title: '来访预约管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'menu1',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '预约审批' }
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '续约审批' }
    }
  ]
}

export default nestedRouter
