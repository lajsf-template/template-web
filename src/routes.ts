/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 09:28:37
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-23 15:04:33
 */
export default [
  {
    path: '/login',
    component: '@/pages/login/index',
    headerRender: false, // 不展示顶栏
    footerRender: false, // 不展示页脚
    menuRender: false, // 不展示菜单
  },
  {
    path: '/demo',
    code: 'demo',
    name: 'demo',
    title: 'demo',
    routes: [
      {
        path: '/demo/demo-1',
        code: 'demo-1',
        component: '@/pages/demo/demo-1',
        name: 'demo-1',
        title: 'demo-1',
      },
      {
        path: '/demo/demo-2',
        code: 'demo-2',
        component: '@/pages/demo/demo-2',
        name: 'demo-2',
        title: 'demo-2',
      },
      {
        path: '/demo/demo-3',
        code: 'demo-3',
        hideInMenu: true,
        component: '@/pages/demo/demo-3',
        name: 'demo-3',
        title: 'demo-3',
      },
    ],
  },
  {
    path: '/users',
    code: 'users',
    name: '用户',
    title: '用户',
    routes: [
      {
        path: '/users/list',
        code: 'users-list',
        component: '@/pages/users/index',
        name: '用户-列表',
        title: '用户-列表',
      },
      {
        path: '/users/detail',
        code: 'users-detail',
        component: '@/pages/users/detail',
        name: '用户-详情',
        hideInMenu: true,
        title: '用户-详情',
      },
      {
        path: '/users/form',
        code: 'users-form',
        component: '@/pages/users/form',
        name: '用户-表单',
        hideInMenu: true,
        title: '用户-表单',
      },
    ],
  },
];
