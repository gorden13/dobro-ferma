import { initApp } from './app';

(async () => {
  const app = await initApp();
  app.mount('#app');
})();
