import { createPinia } from 'pinia';

export const pinia = createPinia();

pinia.use(({ store, app }) => {
  store.$api = app.config.globalProperties.$api;
});
