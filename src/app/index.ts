import { createApp } from 'vue';

import App from './App.vue';
import { apiPlugin } from './api';
import { router, pinia } from './providers';

export const app = createApp(App)
  .use(pinia)
  .use(router)
  .use(apiPlugin, {
    baseURL: import.meta.env.BASE_URL,
  });
