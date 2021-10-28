const path = require('path');
const fs = require('fs');

// api生成的服务名
const serviceNames = ['platform-support', 'business'];

// 生成api.config.json文件
function generateApiConfig() {
  const apiConfigPath = path.join(__dirname, '.', 'api.config.json');
  let apiConfigJson = {
    desc: '用于与服务端进行本地联调使用，通过修改serviceName与服务端联调提供的服务名对应即可',
  };
  for (const serviceName of serviceNames) {
    apiConfigJson[serviceName] = { serviceName: serviceName };
  }
  fs.writeFileSync(
    path.join(apiConfigPath),
    `${JSON.stringify(apiConfigJson, null, 2)}`,
    'utf8',
  );
}

module.exports = {
  serviceNames: serviceNames,
  generateApiConfig: generateApiConfig,
};
