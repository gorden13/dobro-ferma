import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import { createApp, type App } from 'vue';

import app from './App.vue';
import 'element-plus/dist/index.css';
import { apiPlugin } from './api';
import { router, pinia } from './providers';
import { checkAccess } from './services';

export const initApp = async (): Promise<App<Element>> => {
  await checkAccess(pinia);

  const mainApp = createApp(app)
    .use(apiPlugin, {
      baseURL: import.meta.env.VITE_BASE_URL,
    })
    .use(pinia)
    .use(router)
    .use(ElementPlus);

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    mainApp.component(key, component);
  }

  return mainApp;
};
