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
];
