/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 09:57:54
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-23 16:42:44
 */
const path = require('path');
const { resolve } = require('path');
const fs = require('fs');
const axios = require('axios');
const argv = process.argv[2];

const reqUrl = `https://www.fastmock.site/mock/e8823b6c0884aa629219855d2ce7f5f9/test/conf`;
const env = require('./env');
const { mkdirsSync } = require('fs-extra');
// 代码模版
const styleString =
  '.orderAdmin{background-color:white;margin:16px;padding:16px;.title{padding-bottom:16px;font-weight:bold;font-size:16px;line-height:24px;border-bottom:1px solid #f0f1f3}.center{margin-top:16px}} /deep/.ant-form-item-label{overflow: visible !important;}';

// 1.通过shell命令生成目录文件
const doneArgv = argv.split('/');
console.log('doneArgv---', doneArgv);
const entityName = doneArgv[doneArgv.length - 1];
console.log('entityName---', entityName);

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
          console.log(`${entityName}.json文件新建完成`);
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
            '在' + path.dirname(dirname) + '目录创建好' + dirname + '目录',
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
            console.info(`${dirArgv}/index.tsx创建成功`);
          });
          fs.writeFile(dirArgv + `/index.less`, styleString, function (error) {
            console.info(`${dirArgv}/index.less创建成功`);
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
              console.info(`${dirArgv}/form.tsx创建成功`);
            });
            fs.writeFile(
              dirArgv + `/form/index.less`,
              styleString,
              function (error) {
                console.info(`${dirArgv}/form.less创建成功`);
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
              console.info(`${dirArgv}/detail/index.tsx创建成功`);
            });
            fs.writeFile(
              dirArgv + `/detail/index.less`,
              styleString,
              function (error) {
                console.info(`${dirArgv}/detail/index.less创建成功`);
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
  fs.readFile(resolve(__dirname, '../../src/routes.ts'), (err, data) => {
    const dataString = data.toString();
    if (dataString.indexOf(entityName) === -1) {
      const temp = ['f', 'w'];
      let oo;
      const __ooself = (str) => {
        oo = {
          path: str,
          routes: [],
        };
      };

      __ooself('f');
      console.log('******', oo);

      const routeItem = JSON.stringify({
        path: `/${entityName}`,
        code: `${entityName}`,
        name: `${title}`,
        title: `${title}`,
        routes: [
          {
            path: `/${entityName}/list`,
            code: `${entityName}-list`,
            component: `@/pages/${entityName}/index`,
            name: `${title}-列表`,
            title: `${title}-列表`,
          },
          {
            path: `/${entityName}/detail`,
            code: `${entityName}-detail`,
            component: `@/pages/${entityName}/detail`,
            name: `${title}-详情`,
            hideInMenu: true,
            title: `${title}-详情`,
          },
          {
            path: `/${entityName}/form`,
            code: `${entityName}-form`,
            component: `@/pages/${argv}/form`,
            name: `${title}-表单`,
            hideInMenu: true,
            title: `${title}-表单`,
          },
        ],
      });
      data = insertStr(dataString, dataString.length - 4, routeItem).replace(
        /\,\,/g,
        ',',
      );
    }

    if (!err) {
      fs.writeFile(
        resolve(__dirname, '../../src/routes.ts'),
        data,
        function (error) {
          console.info(`${argv}/index.tsx创建成功`);
        },
      );
    }
  });
};
