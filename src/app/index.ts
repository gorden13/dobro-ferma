import Vue from 'vue';

import App from './App.vue';
import apiPlugin, { HttpOptions, useHttpPlugin } from './api';
import { BASE_URL } from './api/constants';
import { router, pinia } from './providers';

Vue.use<HttpOptions>(useHttpPlugin, {
  baseURL: BASE_URL,
});

Vue.use(apiPlugin, {
  baseUrl: BASE_URL,
});

export const initApp = () => {
  return new Vue({
    pinia,
    router,
    render: (h) => h(App),
  });
};
