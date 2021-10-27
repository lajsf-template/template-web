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
    component: '@/pages/demo/index',
    name: 'demo',
    title: 'demo',
  },
];
