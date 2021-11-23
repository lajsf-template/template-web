/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-23 17:20:14
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-23 17:54:36
 */
const ary = ['f', 'w', 'a'];
// 判断数组中对象是否有name
const routes = [
  {
    path: '/login',
    component: '@/pages/login/index',
    headerRender: false, // 不展示顶栏
    footerRender: false, // 不展示页脚
    menuRender: false, // 不展示菜单
    name: 'login',
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
    ],
  },
];
const isInclude = (str, routes) => {
  let boolean = false;
  routes.map((v) => {
    if (v.name === str) {
      boolean = true;
    }
  });
  return boolean;
};
console.log(isInclude('demo1', routes));
const __ooself = (ary) => {
  const __o = [];
  ary.map((v, index) => {
    const temp = {
      path: v,
      name: v,
      routes: [],
    };
    console.log('__o---', __o);
    if (index === 0) {
      __o.push(temp);
    } else {
      __o.routes.push(temp);
    }
  });

  return __o;
};

const a = __ooself(ary);
console.log('a---->', a);
