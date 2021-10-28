const apiConfig = require('./api/apiConfig');
// const exec = require('child_process').exec;

function run() {
  apiConfig.generateApiConfig();
  // exec('umi generate tmp', (error, stdout, stderr) => {
  //     if (error) {
  //         console.error(`exec error: ${error}`);
  //         return;
  //     }
  // });
}
run();
