import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {
  //   name: 'template-web',
  //   locale: true,
  //   layout: 'mix',
  //   splitMenus: true,
  // },
  routes: routes,
  fastRefresh: {},
});
