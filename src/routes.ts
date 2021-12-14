export default [
  {
    path: '/',
    component: '../layouts/BaseLayout',
    routes: [
      {
        path: '/',
        redirect: '/sysManager/roles',
      },
      {
        path: '/sysManager',
        code: 'sysManager',
        name: '系统管理',
        title: 'sysManager',
        meta: {
          title: '系统管理',
        },
        routes: [
          {
            path: '/sysManager',
            redirect: '/sysManager/roles',
          },
          {
            path: 'roles',
            code: 'roles-list',
            component: '@/pages/sysManager/roles/index',
            name: '角色管理',
            title: 'sysManager/roles列表',
            meta: {
              title: '角色管理',
            },
          },
          {
            path: 'roles/detail',
            code: 'roles-detail',
            component: '@/pages/sysManager/roles/detail',
            name: 'sysManager/roles详情',
            hideInMenu: true,
            title: 'sysManager/roles详情',
          },
          {
            path: 'roles/form',
            code: 'roles-form',
            component: '@/pages/sysManager/roles/form',
            name: 'roles表单',
            hideInMenu: true,
            title: 'sysManager/roles表单',
          },
          {
            path: '/sysManager',
            redirect: '/sysManager/users',
          },
          {
            path: 'users',
            code: 'users-list',
            component: '@/pages/sysManager/users/index',
            name: '用户管理',
            title: 'sysManager/users列表',
            meta: {
              title: '用户管理',
            },
          },
          {
            path: 'users/detail',
            code: 'users-detail',
            component: '@/pages/sysManager/users/detail',
            name: 'sysManager/users详情',
            hideInMenu: true,
            title: 'sysManager/users详情',
          },
          {
            path: 'users/form',
            code: 'users-form',
            component: '@/pages/sysManager/users/form',
            name: 'sysManager/users表单',
            hideInMenu: true,
            title: 'sysManager/users表单',
          },
        ],
      },
      {
        path: '/mini',
        code: 'mini',
        name: '小程序',
        title: 'mini',
        meta: {
          title: '小程序',
        },
        routes: [
          {
            path: '/mini',
            redirect: '/mini/user/feedback',
          },
          {
            path: 'user',
            code: 'user',
            name: '用户管理',
            title: 'user',
            meta: {
              title: '用户管理',
            },
            routes: [
              {
                path: 'feedback',
                code: 'feedback-list',
                component: '@/pages/mini/user/feedback/index',
                name: '反馈列表',
                title: 'mini/user/feedback列表',
                meta: {
                  title: '反馈列表',
                },
              },
              {
                path: 'feedback/detail',
                code: 'feedback-detail',
                component: '@/pages/mini/user/feedback/detail',
                name: 'mini/user/feedback详情',
                hideInMenu: true,
                title: 'mini/user/feedback详情',
              },
              {
                path: 'feedback/form',
                code: 'feedback-form',
                component: '@/pages/mini/user/feedback/form',
                name: 'mini/user/feedback表单',
                hideInMenu: true,
                title: 'mini/user/feedback表单',
              },
            ],
          },
        ],
      },
    ],
  },
];
