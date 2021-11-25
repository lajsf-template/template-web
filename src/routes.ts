export default [
  {
    path: '/',
    component: '../layouts/BaseLayout',
    routes: [
      {
        path: '/test',
        code: 'test',
        name: 'test',
        title: 'test',
        routes: [
          {
            path: 'a',
            code: 'a',
            name: 'a',
            title: 'a',
            routes: [
              {
                path: 'c',
                code: 'c-list',
                component: '@/pages/test/a/c/index',
                name: 'c-列表',
                title: '用户-列表',
              },
              {
                path: 'c/detail',
                code: 'c-detail',
                component: '@/pages/test/a/c/detail',
                name: 'c-详情',
                hideInMenu: true,
                title: '用户-详情',
              },
              {
                path: 'c/form',
                code: 'c-form',
                component: '@/pages/test/a/c/form',
                name: 'c-表单',
                hideInMenu: true,
                title: '用户-表单',
              },
            ],
          },
        ],
      },
    ],
  },
];
