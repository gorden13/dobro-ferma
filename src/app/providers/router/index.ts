import Vue from 'vue';
import VueRouter, { type NavigationGuardNext, type Route } from 'vue-router';

import { authGuard } from './auth-guard';
import routes from './routes';

import { ROUTES } from '@/shared/constants';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
  if (to.meta?.auth) {
    const noAccess = authGuard();

    if (noAccess) {
      next({
        name: ROUTES.ErrorPage.name,
        params: { title: 'У данного пользователя нет прав' },
      });
    } else {
      next();
    }

    return;
  }

  next();
});

export { router };
