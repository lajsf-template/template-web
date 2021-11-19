/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 09:57:54
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-19 17:52:09
 */
const { resolve } = require('path');
const fs = require('fs');
const axios = require('axios');
const moduleName = process.argv[2];

const reqUrl = `http://rap2api.taobao.org/app/mock/294102/example/1637137178650?type=${moduleName}`;
const env = require('./env');
// 代码模版
const styleString =
  '.orderAdmin{background-color:white;margin:16px;padding:16px;.title{padding-bottom:16px;font-weight:bold;font-size:16px;line-height:24px;border-bottom:1px solid #f0f1f3}.center{margin-top:16px}}';

// 1.通过shell命令生成目录文件
const dirName = resolve('./src/pages/' + moduleName);
axios.get(reqUrl).then((res) => {
  //处理带有函数的字段
  // console.log('********', JSON.stringify(res.data.table.elements));
  const { form, table, title, domain, serviceName, resourceName, btn } =
    res.data;
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
    JSON.stringify(env[domain.split('.')[1]][domain.split('.')[2]]) +
    ';' +
    'export const serviceName = ' +
    JSON.stringify(
      env[serviceName.split('.')[1]][serviceName.split('.')[2]][
        serviceName.split('.')[3]
      ],
    ) +
    ';' +
    'export const resourceName = ' +
    JSON.stringify(resourceName) +
    ';';

  // 2.通过模版生成文件
  createDir(dirName, function () {
    // 生成配置文件
    fs.writeFile(dirName + `/constants.ts`, data, function (error) {
      // 写入table以及样式
      fs.readFile(resolve(__dirname, './template_index.tsx'), (err, data) => {
        data = data.toString().replace(
          /moduleName/g,
          process.argv[2].replace(/^\S/, (s) => s.toUpperCase()),
        );
        if (!err) {
          fs.writeFile(dirName + `/index.tsx`, data, function (error) {
            console.info(`${dirName}/index.tsx创建成`);
          });
          fs.writeFile(dirName + `/index.less`, styleString, function (error) {
            console.info(`${dirName}/index.less创建成`);
          });
        }
      });

      // 生成表单页面
      fs.readFile(resolve(__dirname, './template_form.tsx'), (err, data) => {
        data = data
          .toString()
          .replace(
            /moduleName/g,
            process.argv[2].replace(/^\S/, (s) => s.toUpperCase()) + 'Form',
          );
        if (!err) {
          fs.writeFile(dirName + `/form.tsx`, data, function (error) {
            console.info(`${dirName}/form.tsx创建成`);
          });
          fs.writeFile(dirName + `/form.less`, styleString, function (error) {
            console.info(`${dirName}/form.less创建成`);
          });
        }
      });

      // 生成详情页面
      fs.readFile(resolve(__dirname, './template_detail.tsx'), (err, data) => {
        data = data
          .toString()
          .replace(
            /moduleName/g,
            process.argv[2].replace(/^\S/, (s) => s.toUpperCase()) + 'Detail',
          );
        if (!err) {
          fs.writeFile(dirName + `/detail.tsx`, data, function (error) {
            console.info(`${dirName}/detail.tsx创建成`);
          });
          fs.writeFile(dirName + `/detail.less`, styleString, function (error) {
            console.info(`${dirName}/detail.less创建成`);
          });
        }
      });
    });
  });

  // 3.生成路由
  function insertStr(soure, start, newStr) {
    return soure.slice(0, start) + `,${newStr}` + soure.slice(start);
  }
  fs.readFile(resolve(__dirname, '../../src/routes.ts'), (err, data) => {
    const dataString = data.toString();
    if (dataString.indexOf(moduleName) === -1) {
      const routeItem = JSON.stringify({
        path: `/${moduleName}`,
        code: `${moduleName}`,
        name: `${title}`,
        title: `${title}`,
        routes: [
          {
            path: `/${moduleName}/list`,
            code: `${moduleName}-list`,
            component: `@/pages/${moduleName}/index`,
            name: `${title}-列表`,
            title: `${title}-列表`,
          },
          {
            path: `/${moduleName}/detail`,
            code: `${moduleName}-detail`,
            component: `@/pages/${moduleName}/detail`,
            name: `${title}-详情`,
            hideInMenu: true,
            title: `${title}-详情`,
          },
          {
            path: `/${moduleName}/form`,
            code: `${moduleName}-form`,
            component: `@/pages/${moduleName}/form`,
            name: `${title}-表单`,
            hideInMenu: true,
            title: `${title}-表单`,
          },
        ],
      });
      data = insertStr(dataString, dataString.length - 4, routeItem);
    }

    if (!err) {
      fs.writeFile(
        resolve(__dirname, '../../src/routes.ts'),
        data,
        function (error) {
          console.info(`${dirName}/index.tsx创建成`);
        },
      );
    }
  });
});

const createDir = (path, cb) => {
  var pathAry = path.split('/');
  for (var i = 0; i < pathAry.length; i++) {
    var curPath = pathAry.slice(0, i + 1).join('/');
    (function (curPath) {
      //将curPath传入闭包
      fs.exists(curPath, function (exists) {
        if (!exists) {
          fs.mkdir(curPath, function () {
            console.log(curPath + ' is created!');
            cb();
          });
        }
      });
    })(curPath);
  }
};
