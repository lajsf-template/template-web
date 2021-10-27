import { defineConfig } from 'umi';
import routes from './src/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    name: 'template-web',
    locale: true,
    layout: 'side',
  },
  routes: routes,
  fastRefresh: {},
});
