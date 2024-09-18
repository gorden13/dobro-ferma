import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import { createApp, type App } from 'vue';

import app from './App.vue';
import 'element-plus/dist/index.css';
import { apiPlugin } from './api';
import { router, pinia } from './providers';

const checkAccess = async () => {
  try {
    const result = await (await fetch(`${import.meta.env.VITE_BASE_URL}users/me`)).json();

    if (!result?.success) {
      router.push({ name: 'auth' });
      return;
    }

    pinia.use(({ store }) => {
      store.user = {
        ...result,
      };
    });

    pinia.use(({ store }) => {
      store.auth = {
        isAuthenticated: true,
      };
    });
  } catch (error) {
    router.push({ name: 'auth' });
  }
};

export const initApp = async (): Promise<App<Element>> => {
  await checkAccess();

  const mainApp = createApp(app)
    .use(apiPlugin, {
      baseURL: import.meta.env.VITE_BASE_URL,
    })
    .use(pinia)
    .use(router)
    .use(ElementPlus);

  // eslint-disable-next-line no-restricted-syntax
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    mainApp.component(key, component);
  }

  return mainApp;
};
