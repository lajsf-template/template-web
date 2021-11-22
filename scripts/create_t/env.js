/*
 * @Description:
 * @Version: 2.0
 * @Autor: zhanghang
 * @Email: suchiva@126.com
 * @Date: 2021-11-16 15:45:59
 * @LastEditors: zhanghang
 * @LastEditTime: 2021-11-22 17:40:58
 */
module.exports = {
  systemName: '平台支撑后台',
  tenantId: 'nutritiondiet',
  contextPath: '/',
  enableMessageBox: false,
  api: {
    domain: 'https://api-dev.yryz.com/gateway/',
    service: {
      support: '/platform-support/v1.0',
      pay: '/platform-pay/v1.0',
      behavior: '/platform-behavior/v1.0',
      user: '/lovelorn-user/v1.0',
      merchant: '/merchant/v1.0',
      default: '/lovelorn-user/v1.0',
      'yangshan-business': '/yangshan-business/v1.0',
    },
  },
  dingTalk: {
    enable: true,
    appKey: 'dingrvvwprwrn0ohabse',
  },
};
