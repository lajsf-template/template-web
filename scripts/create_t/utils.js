/*
 * @Description: 基本配置也包括也涉及相关方法
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-24 15:55:01
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-26 15:17:16
 */
const fs = require('fs');
const path = require('path');
const { resolve } = require('path');

// 请求配置路由
const configJsonReqUrl = `https://www.fastmock.site/mock/e8823b6c0884aa629219855d2ce7f5f9/test/conf`;
// 默认样式文件
const styleString =
  '.orderAdmin{background-color:white;margin:16px;padding:16px;.title{padding-bottom:16px;font-weight:bold;font-size:16px;line-height:24px;border-bottom:1px solid #f0f1f3}.center{margin-top:16px}} /deep/.ant-form-item-label{overflow: visible !important;}';
// 参数判断
const isParamsWrong = (argv) => {
  const doneArgv = argv.split('/');
  let isWrong =
    argv.length < 3 ||
    argv.indexOf('/') === -1 ||
    argv[argv.length - 1] === '/' ||
    !/^[a-zA-Z]+$/.test(doneArgv[doneArgv.length - 1]) ||
    !/^[a-zA-Z]+$/.test(doneArgv[0]) ||
    (doneArgv.length !== 2 && doneArgv.length !== 3);
  // 判断是否是英文字母，如果不是，抛出
  doneArgv.map((v) => {
    if (!/^[a-zA-Z]+$/.test(v)) isWrong = true;
  });
  return isWrong;
};
// 服务映射文件
const env = require('./env');

// 创建文件夹
const createDir = (dirname, callback) => {
  fs.exists(dirname, function (exists) {
    if (exists) {
      callback();
    } else {
      createDir(path.dirname(dirname), function () {
        fs.mkdir(dirname, callback);
        console.log(
          ('在' + path.dirname(dirname) + '目录创建好' + dirname + '目录')
            .green,
        );
      });
    }
  });
};

// 数组是否包含某个字段等于某个值
function arryContains(ary, filed, str) {
  let obj = {
    boolean: false,
    item: {},
  };
  ary.map((v, index) => {
    if (v[filed] === str) {
      obj.boolean = true;
      obj.item = v;
      obj.index = index;
    } else {
      if (v.routes && v.routes.length > 0) {
        v.routes.map((m, _index) => {
          if (m[filed] === str) {
            obj.boolean = true;
            obj.item = v;
            obj.index = index + '_' + _index;
          }
        });
      }
    }
  });
  return obj;
}

const firstLevelRouteItemLe3 = (doneArgv, entityName, title) => [
  {
    path: `/${doneArgv[0]}`,
    code: `${doneArgv[0]}`,
    name: `${doneArgv[0]}`,
    title: `${doneArgv[0]}`,
    routes: [
      {
        path: `/${doneArgv[0]}`,
        redirect: `/${doneArgv[0]}/${doneArgv[1]}/${doneArgv[2]}`,
      },
      {
        path: `${doneArgv[1]}`,
        code: `${doneArgv[1]}`,
        name: `${doneArgv[1]}`,
        title: `${doneArgv[1]}`,
        routes: [
          {
            path: `${entityName}`,
            code: `${entityName}-list`,
            component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/index`,
            name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}列表`,
            title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}列表`,
          },
          {
            path: `${entityName}/detail`,
            code: `${entityName}-detail`,
            component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/detail`,
            name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}详情`,
            hideInMenu: true,
            title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}详情`,
          },
          {
            path: `${entityName}/form`,
            code: `${entityName}-form`,
            component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/form`,
            name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}表单`,
            hideInMenu: true,
            title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}表单`,
          },
        ],
      },
    ],
  },
];
const secondLevelRouteItemLe3 = (doneArgv, entityName, title) => {
  return {
    path: `${doneArgv[1]}`,
    code: `${doneArgv[1]}`,
    name: `${doneArgv[1]}`,
    title: `${doneArgv[1]}`,
    routes: [
      {
        path: `${entityName}`,
        code: `${entityName}-list`,
        component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/index`,
        name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}列表`,
        title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}列表`,
      },
      {
        path: `${entityName}/detail`,
        code: `${entityName}-detail`,
        component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/detail`,
        name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}详情`,
        hideInMenu: true,
        title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}详情`,
      },
      {
        path: `${entityName}/form`,
        code: `${entityName}-form`,
        component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/form`,
        name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}表单`,
        hideInMenu: true,
        title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}表单`,
      },
    ],
  };
};

const thirdLevelRouteItemLe3 = (doneArgv, entityName, title) => [
  {
    path: `${entityName}`,
    code: `${entityName}-list`,
    component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/index`,
    name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}列表`,
    title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}列表`,
  },
  {
    path: `${entityName}/detail`,
    code: `${entityName}-detail`,
    component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/detail`,
    name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}详情`,
    hideInMenu: true,
    title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}详情`,
  },
  {
    path: `${entityName}/form`,
    code: `${entityName}-form`,
    component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/form`,
    name: `${doneArgv[0]}/${doneArgv[1]}/${entityName}表单`,
    hideInMenu: true,
    title: `${doneArgv[0]}/${doneArgv[1]}/${entityName}表单`,
  },
];

const firstLevelRouteItemLe2 = (doneArgv, entityName, title) => [
  {
    path: `/${doneArgv[0]}`,
    code: `${doneArgv[0]}`,
    name: `${doneArgv[0]}`,
    title: `${doneArgv[0]}`,
    routes: [
      {
        path: `/${doneArgv[0]}`,
        redirect: `/${doneArgv[0]}/${entityName}`,
      },
      {
        path: `${entityName}`,
        code: `${entityName}-list`,
        component: `@/pages/${doneArgv[0]}/${entityName}/index`,
        name: `${doneArgv[0]}/${entityName}列表`,
        title: `${doneArgv[0]}/${entityName}列表`,
      },
      {
        path: `${entityName}/detail`,
        code: `${entityName}-detail`,
        component: `@/pages/${doneArgv[0]}/${entityName}/detail`,
        name: `${doneArgv[0]}/${entityName}详情`,
        hideInMenu: true,
        title: `${doneArgv[0]}/${entityName}详情`,
      },
      {
        path: `${entityName}/form`,
        code: `${entityName}-form`,
        component: `@/pages/${doneArgv[0]}/${entityName}/form`,
        name: `${entityName}表单`,
        hideInMenu: true,
        title: `${doneArgv[0]}/${entityName}表单`,
      },
    ],
  },
];

const secondLevelRouteItemLe2 = (doneArgv, entityName, title) => {
  return [
    {
      path: `/${doneArgv[0]}`,
      redirect: `/${doneArgv[0]}/${entityName}`,
    },
    {
      path: `${entityName}`,
      code: `${entityName}-list`,
      component: `@/pages/${doneArgv[0]}/${entityName}/index`,
      name: `${doneArgv[0]}/${entityName}列表`,
      title: `${doneArgv[0]}/${entityName}列表`,
    },
    {
      path: `${entityName}/detail`,
      code: `${entityName}-detail`,
      component: `@/pages/${doneArgv[0]}/${entityName}/detail`,
      name: `${doneArgv[0]}/${entityName}详情`,
      hideInMenu: true,
      title: `${doneArgv[0]}/${entityName}详情`,
    },
    {
      path: `${entityName}/form`,
      code: `${entityName}-form`,
      component: `@/pages/${doneArgv[0]}/${entityName}/form`,
      name: `${doneArgv[0]}/${entityName}表单`,
      hideInMenu: true,
      title: `${doneArgv[0]}/${entityName}表单`,
    },
  ];
};

const fileResolve = (str) => resolve(__dirname, str);

const pagesDir = '../../src/pages/';
const routesDir = '../../src/routes.ts';

const assembleConstants = (res, argv) => {
  // 处理带有函数的字段
  const { form, table, title, domain, serviceName, resourceName, btn } = res;
  // 常规请求路由
  const __domain = env[domain.split('.')[1]][domain.split('.')[2]];
  const __serviceName =
    env[serviceName.split('.')[1]][serviceName.split('.')[2]][
      serviceName.split('.')[3]
    ];
  const baseUrl = `${__domain}${__serviceName}/pv/${resourceName}`;
  const addUrl = `${baseUrl}/action/create`;
  const editUrl = `${baseUrl}/action/update`;
  const detailUrl = `${baseUrl}/action/detail`;
  const listUrl = `${baseUrl}/action/list-page`;
  const removeUrl = `${baseUrl}/action/batch-update`;
  const data =
    'export const formData = ' +
    JSON.stringify(form) +
    ';' +
    'export const TableColumns = ' +
    JSON.stringify(table.elements) +
    ';' +
    'export const btn = ' +
    JSON.stringify(btn) +
    ';' +
    'export const title = ' +
    JSON.stringify(title) +
    ';' +
    'export const domain = ' +
    JSON.stringify(__domain) +
    ';' +
    'export const serviceName = ' +
    JSON.stringify(__serviceName) +
    ';' +
    'export const resourceName = ' +
    JSON.stringify(resourceName) +
    ';' +
    ';' +
    'export const argv = ' +
    JSON.stringify(argv) +
    ';' +
    'export const requestUrl = ' +
    JSON.stringify({
      addUrl,
      editUrl,
      detailUrl,
      listUrl,
      removeUrl,
    }) +
    ';';
  return data;
};
module.exports = {
  configJsonReqUrl,
  styleString,
  isParamsWrong,
  env,
  createDir,
  arryContains,
  fileResolve,
  pagesDir,
  routesDir,
  firstLevelRouteItemLe3,
  secondLevelRouteItemLe3,
  thirdLevelRouteItemLe3,
  firstLevelRouteItemLe2,
  secondLevelRouteItemLe2,
  assembleConstants,
};
