import { createRouter, createWebHistory } from 'vue-router';

import { isAuthenticated } from './auth-guard';
import routes from './routes';

import { ROUTES } from '@/shared/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _from, next) => {
  if (to.meta?.auth && !isAuthenticated()) {
    next({
      name: ROUTES.AuthForm.name,
    });
  } else if (to.name === 'auth' && (await isAuthenticated())) {
    next({
      name: ROUTES.Products.name,
    });
  } else {
    next();
  }
});

export { router };
