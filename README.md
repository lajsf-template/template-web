# template-web project
git地址：http://192.168.50.200:8081/template/template-web.git
分支：dev-suchiva

## 开始

1.安装依赖

```bash
npm i
```

2.配置服务映射文件 【默认：'yangshan-business': '/yangshan-business/v1.0'】
```bash
/script/create_t
        ｜--env.js  服务映射文件 
        |--utils.js 常规配置参数，其中该文件configJsonReqUrl是请求 页面配置接口，请求参数为type,目前内置mock数据地址:
        https://www.fastmock.site/mock/e8823b6c0884aa629219855d2ce7f5f9/test/conf?type=users
        
```
3.生成模版【最多支持3级目录 a/b和a/b/c】

```bash
npm run create_template a/b
```
4.运行程序

```bash
npm run start
```
