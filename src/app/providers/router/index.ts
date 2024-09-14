import { createRouter, createWebHistory } from 'vue-router';

import { authGuard } from './auth-guard';
import routes from './routes';

import { ROUTES } from '@/shared/constants';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, _from, next) => {
  if (to.meta?.auth) {
    const noAccess = authGuard();

    if (noAccess) {
      next({
        name: ROUTES.ErrorPage.name,
        params: { title: 'У данного пользователя нет прав' },
      });
    }
  } else {
    next();
  }
});

export { router };
