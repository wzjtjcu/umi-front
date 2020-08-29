import { defineConfig } from 'umi';

export default defineConfig({
  history: { type: 'hash' },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', component: 'index' },
    { exact: true, path: '/home', component: 'home' },
  ],
});
