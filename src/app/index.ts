import ElementPlus from 'element-plus';
import { createApp } from 'vue';

import App from './App.vue';
import 'element-plus/dist/index.css';
import { apiPlugin } from './api';
import { router, pinia } from './providers';

export const app = createApp(App)
  .use(apiPlugin, {
    baseURL: import.meta.env.VITE_BASE_URL,
  })
  .use(pinia)
  .use(router)
  .use(ElementPlus);
