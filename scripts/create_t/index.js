/*
 * @Description: 生成模版入口文件
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 09:57:54
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-24 17:20:56
 */
const colors = require('colors');
const fs = require('fs');
const axios = require('axios');
const argv = process.argv[2];
const doneArgv = argv.split('/');

const {
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
} = require('./utils');
// 是否支持3层路由/目录
const isLeveleThree = doneArgv.length === 3;
// 实体名称 对应 后台实体
const entityName = doneArgv[doneArgv.length - 1];
// 判断shell命令是否符合约定
if (isParamsWrong(argv)) {
  console.error('命令参数不正确，请修正！'.red);
  return;
}

// 1.通过shell命令生成目录文件
// 2.如果当前本地存在实体配置文件，则读取；如果不存在，则远程请求相关配置文件，并写入本地；
// 3.读取实体配置文件后，根据相关配置规则，进行解析写入connstant.tsx文件：包括表格/表单/以及常规服务配置等信息
if (fs.existsSync(fileResolve(`./${entityName}.json`))) {
  fs.readFile(fileResolve(`./${entityName}.json`), (err, config) => {
    doneWithFn(JSON.parse(config.toString()));
  });
} else {
  // 如果没有本地文件就读接口，请求文件
  axios
    .get(configJsonReqUrl, {
      params: {
        type: entityName,
      },
    })
    .then((res) => {
      fs.writeFile(
        fileResolve(`./${entityName}.json`),
        JSON.stringify(res.data),
        (error) => {
          console.log(`${entityName}.json文件新建完成`.green);
          doneWithFn(res.data);
        },
      );
    });
}

const doneWithFn = (res) => {
  const { title } = res;
  // 组装constants文件代码结构
  const writeConstantsStr = assembleConstants(res, argv);
  // 2.通过模版生成文件
  createDir(fileResolve(pagesDir + argv), function () {
    const dirArgv = fileResolve(pagesDir + argv);
    fs.writeFile(
      dirArgv + `/constants.ts`,
      writeConstantsStr,
      function (error) {
        // 写入table以及样式
        fs.readFile(fileResolve('./template_index.tsx'), (err, data) => {
          data = data.toString().replace(
            /entityName/g,
            argv.replace(/^\S/, (s) => s.toUpperCase()),
          );
          if (!err) {
            fs.writeFile(dirArgv + `/index.tsx`, data, function (error) {
              console.info(`${dirArgv}/index.tsx创建成功`.green);
            });
            fs.writeFile(
              dirArgv + `/index.less`,
              styleString,
              function (error) {
                console.info(`${dirArgv}/index.less创建成功`.green);
              },
            );
          }
        });

        // 生成表单页面
        fs.readFile(fileResolve('./template_form.tsx'), (err, data) => {
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
        fs.readFile(fileResolve('./template_detail.tsx'), (err, data) => {
          data = data
            .toString()
            .replace(
              /entityName/g,
              argv.replace(/^\S/, (s) => s.toUpperCase()) + 'Detail',
            );
          if (!err) {
            fs.mkdir(dirArgv + '/detail', function () {
              fs.writeFile(
                dirArgv + `/detail/index.tsx`,
                data,
                function (error) {
                  console.info(`${dirArgv}/detail/index.tsx创建成功`.green);
                },
              );
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
      },
    );
  });

  // 3.生成路由
  function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + `,${newStr}` + soure.slice(start);
  }

  fs.readFile(fileResolve(routesDir), (err, data) => {
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
        if (!arryContains(jsonRoute, 'name', doneArgv[0]).boolean) {
          // 如果该目录没有，直接在第一级创建
          routeItem = firstLevelRouteItemLe3(doneArgv, entityName, title);
          jsonRoute = [...jsonRoute, ...routeItem];
        } else {
          // 如果目录存在，那就读取相关信息
          const positionDetails_0 = arryContains(
            jsonRoute,
            'name',
            doneArgv[0],
          );
          if (!positionDetails_0.boolean) {
            // 一级目录有，就找第二级目录，如果没有，就直接创建
            const __item = secondLevelRouteItemLe3(doneArgv, entityName, title);
            jsonRoute.splice(positionDetails.index, 0, __item);
          } else {
            const positionDetails_1 = arryContains(
              jsonRoute,
              'name',
              doneArgv[1],
            );
            const __item = thirdLevelRouteItemLe3(doneArgv, entityName, title);
            const __indexPosi = positionDetails_1.index.split('_');
            jsonRoute[__indexPosi[0]].routes[__indexPosi[1]].routes.push(
              ...__item,
            );
          }
        }
      } else {
        // 创建两层路由
        if (!arryContains(jsonRoute, 'name', doneArgv[0]).boolean) {
          //第一层目录判断
          // 如果没有的当前模块
          const routeItem = firstLevelRouteItemLe2(doneArgv, entityName, title);
          jsonRoute = [...jsonRoute, ...routeItem];
        } else {
          // 如果有当前模块，直接追加
          const item = secondLevelRouteItemLe2(doneArgv, entityName, title);
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
      fs.writeFile(fileResolve(routesDir), data, function (error) {
        console.info(`${argv}/index.tsx创建成功`.green);
      });
    }
  });
};
