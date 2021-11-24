/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 09:57:54
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-24 15:27:50
 */
const path = require('path');
const colors = require('colors');
const { resolve } = require('path');
const fs = require('fs');
const axios = require('axios');
const argv = process.argv[2];

const reqUrl = `https://www.fastmock.site/mock/e8823b6c0884aa629219855d2ce7f5f9/test/conf`;
const env = require('./env');
const doneArgv = argv.split('/');
const isLeveleThree = doneArgv.length === 3; // 是否支持3层路由/目录
const entityName = doneArgv[doneArgv.length - 1];
// 代码模版
const styleString =
  '.orderAdmin{background-color:white;margin:16px;padding:16px;.title{padding-bottom:16px;font-weight:bold;font-size:16px;line-height:24px;border-bottom:1px solid #f0f1f3}.center{margin-top:16px}} /deep/.ant-form-item-label{overflow: visible !important;}';
const isParamsWrong = () => {
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
if (isParamsWrong()) {
  console.error('命令参数不正确，请修正！'.red);
  return;
}
// 1.通过shell命令生成目录文件
if (fs.existsSync(resolve(__dirname, `./${entityName}.json`))) {
  //如果有本地配置文件就读本地配置文件
  fs.readFile(resolve(__dirname, `./${entityName}.json`), (err, config) => {
    doneWithFn(JSON.parse(config.toString()));
  });
} else {
  // 如果没有本地文件就读接口，请求文件
  axios
    .get(reqUrl, {
      params: {
        type: entityName,
      },
    })
    .then((res) => {
      fs.writeFile(
        resolve(__dirname, `./${entityName}.json`),
        JSON.stringify(res.data),
        (error) => {
          console.log(`${entityName}.json文件新建完成`.green);
          doneWithFn(res.data);
        },
      );
    });
}

const doneWithFn = (res) => {
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

  // 2.通过模版生成文件
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
  createDir(resolve(__dirname, '../../src/pages/' + argv), function () {
    const dirArgv = resolve(__dirname, '../../src/pages/' + argv);
    fs.writeFile(dirArgv + `/constants.ts`, data, function (error) {
      // 写入table以及样式
      fs.readFile(resolve(__dirname, './template_index.tsx'), (err, data) => {
        data = data.toString().replace(
          /entityName/g,
          argv.replace(/^\S/, (s) => s.toUpperCase()),
        );
        if (!err) {
          fs.writeFile(dirArgv + `/index.tsx`, data, function (error) {
            console.info(`${dirArgv}/index.tsx创建成功`.green);
          });
          fs.writeFile(dirArgv + `/index.less`, styleString, function (error) {
            console.info(`${dirArgv}/index.less创建成功`.green);
          });
        }
      });

      // 生成表单页面
      fs.readFile(resolve(__dirname, './template_form.tsx'), (err, data) => {
        data = data
          .toString()
          .replace(
            /entityName/g,
            argv.replace(/^\S/, (s) => s.toUpperCase()) + 'Form',
          );
        if (!err) {
          fs.mkdir(dirArgv + '/form', function () {
            fs.writeFile(dirArgv + `/form/index.tsx`, data, function (error) {
              console.info(`${dirArgv}/form.tsx创建成功`.green);
            });
            fs.writeFile(
              dirArgv + `/form/index.less`,
              styleString,
              function (error) {
                console.info(`${dirArgv}/form.less创建成功`.green);
              },
            );
          });
        }
      });

      // 生成详情页面
      fs.readFile(resolve(__dirname, './template_detail.tsx'), (err, data) => {
        data = data
          .toString()
          .replace(
            /entityName/g,
            argv.replace(/^\S/, (s) => s.toUpperCase()) + 'Detail',
          );
        if (!err) {
          fs.mkdir(dirArgv + '/detail', function () {
            fs.writeFile(dirArgv + `/detail/index.tsx`, data, function (error) {
              console.info(`${dirArgv}/detail/index.tsx创建成功`.green);
            });
            fs.writeFile(
              dirArgv + `/detail/index.less`,
              styleString,
              function (error) {
                console.info(`${dirArgv}/detail/index.less创建成功`.green);
              },
            );
          });
        }
      });
    });
  });

  // 3.生成路由
  function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + `,${newStr}` + soure.slice(start);
  }
  function arryCotains(ary, filed, str) {
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
  fs.readFile(resolve(__dirname, '../../src/routes.ts'), (err, data) => {
    const dataString = data.toString().trim();
    const aryIndex = dataString.indexOf('export default') + 14;
    let jsonRoute = eval(
      '(' + dataString.substring(aryIndex, dataString.length - 1) + ')',
    );
    doneArgv.map((v, index) => {
      if (index !== doneArgv.length - 1) {
      }
    });
    const insertRoute = (jsonRoute, leveName) => {
      if (isLeveleThree) {
        // 如果是创建三层目录， 目前仅支持小于3层目录，如果需要更多支持，另行设计
        let routeItem = [];
        if (!arryCotains(jsonRoute, 'name', doneArgv[0]).boolean) {
          // 如果该目录没有，直接在第一级创建
          routeItem = [
            {
              path: `/${doneArgv[0]}`,
              code: `${doneArgv[0]}`,
              name: `${doneArgv[0]}`,
              title: `${doneArgv[0]}`,
              routes: [
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
                      name: `${entityName}-列表`,
                      title: `${title}-列表`,
                    },
                    {
                      path: `${entityName}/detail`,
                      code: `${entityName}-detail`,
                      component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/detail`,
                      name: `${entityName}-详情`,
                      hideInMenu: true,
                      title: `${title}-详情`,
                    },
                    {
                      path: `${entityName}/form`,
                      code: `${entityName}-form`,
                      component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/form`,
                      name: `${entityName}-表单`,
                      hideInMenu: true,
                      title: `${title}-表单`,
                    },
                  ],
                },
              ],
            },
          ];
          jsonRoute = [...jsonRoute, ...routeItem];
        } else {
          // 如果目录存在，那就读取相关信息
          const positionDetails_0 = arryCotains(jsonRoute, 'name', doneArgv[0]);
          if (!positionDetails_0.boolean) {
            // 一级目录有，就找第二级目录，如果没有，就直接创建
            const __item = {
              path: `${doneArgv[1]}`,
              code: `${doneArgv[1]}`,
              name: `${doneArgv[1]}`,
              title: `${doneArgv[1]}`,
              routes: [
                {
                  path: `${entityName}`,
                  code: `${entityName}-list`,
                  component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/index`,
                  name: `${entityName}-列表`,
                  title: `${title}-列表`,
                },
                {
                  path: `${entityName}/detail`,
                  code: `${entityName}-detail`,
                  component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/detail`,
                  name: `${entityName}-详情`,
                  hideInMenu: true,
                  title: `${title}-详情`,
                },
                {
                  path: `${entityName}/form`,
                  code: `${entityName}-form`,
                  component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/form`,
                  name: `${entityName}-表单`,
                  hideInMenu: true,
                  title: `${title}-表单`,
                },
              ],
            };
            jsonRoute.splice(positionDetails.index, 0, __item);
          } else {
            const positionDetails_1 = arryCotains(
              jsonRoute,
              'name',
              doneArgv[1],
            );
            const __item = [
              {
                path: `${entityName}`,
                code: `${entityName}-list`,
                component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/index`,
                name: `${entityName}-列表`,
                title: `${title}-列表`,
              },
              {
                path: `${entityName}/detail`,
                code: `${entityName}-detail`,
                component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/detail`,
                name: `${entityName}-详情`,
                hideInMenu: true,
                title: `${title}-详情`,
              },
              {
                path: `${entityName}/form`,
                code: `${entityName}-form`,
                component: `@/pages/${doneArgv[0]}/${doneArgv[1]}/${entityName}/form`,
                name: `${entityName}-表单`,
                hideInMenu: true,
                title: `${title}-表单`,
              },
            ];
            const __indexPosi = positionDetails_1.index.split('_');
            jsonRoute[__indexPosi[0]].routes[__indexPosi[1]].routes.push(
              ...__item,
            );
          }
        }
      } else {
        // 创建两层路由
        if (!arryCotains(jsonRoute, 'name', doneArgv[0]).boolean) {
          //第一层目录判断
          // 如果没有的当前模块
          const routeItem = [
            {
              path: `/${doneArgv[0]}`,
              code: `${doneArgv[0]}`,
              name: `${doneArgv[0]}`,
              title: `${doneArgv[0]}`,
              routes: [
                {
                  path: `${entityName}`,
                  code: `${entityName}-list`,
                  component: `@/pages/${doneArgv[0]}/${entityName}/index`,
                  name: `${entityName}-列表`,
                  title: `${title}-列表`,
                },
                {
                  path: `${entityName}/detail`,
                  code: `${entityName}-detail`,
                  component: `@/pages/${doneArgv[0]}/${entityName}/detail`,
                  name: `${entityName}-详情`,
                  hideInMenu: true,
                  title: `${title}-详情`,
                },
                {
                  path: `${entityName}/form`,
                  code: `${entityName}-form`,
                  component: `@/pages/${doneArgv[0]}/${entityName}/form`,
                  name: `${entityName}-表单`,
                  hideInMenu: true,
                  title: `${title}-表单`,
                },
              ],
            },
          ];
          jsonRoute = [...jsonRoute, ...routeItem];
        } else {
          // 如果有当前模块，直接追加
          const item = [
            {
              path: `${entityName}`,
              code: `${entityName}-list`,
              component: `@/pages/${doneArgv[0]}/${entityName}/index`,
              name: `${entityName}-列表`,
              title: `${title}-列表`,
            },
            {
              path: `${entityName}/detail`,
              code: `${entityName}-detail`,
              component: `@/pages/${doneArgv[0]}/${entityName}/detail`,
              name: `${entityName}-详情`,
              hideInMenu: true,
              title: `${title}-详情`,
            },
            {
              path: `${entityName}/form`,
              code: `${entityName}-form`,
              component: `@/pages/${doneArgv[0]}/${entityName}/form`,
              name: `${entityName}-表单`,
              hideInMenu: true,
              title: `${title}-表单`,
            },
          ];
          jsonRoute.map((v) => {
            if (v.name === doneArgv[0]) {
              // 如果是
              // 如果目录存在并且之前没有页面新建,
              let subCotains = false;
              v.routes.map((m) => {
                if (m.name.indexOf(entityName) > -1) {
                  subCotains = true;
                }
              });
              if (!subCotains) {
                v.routes = [...v.routes, ...item];
              }
            }
          });
        }
      }

      return jsonRoute;
    };

    jsonRoute = insertRoute(jsonRoute);
    // return;

    data = 'export default ' + JSON.stringify(jsonRoute) + ';';

    if (!err) {
      fs.writeFile(
        resolve(__dirname, '../../src/routes.ts'),
        data,
        function (error) {
          console.info(`${argv}/index.tsx创建成功`.green);
        },
      );
    }
  });
};
