import { ELayouts } from '@/app/constants';
import { ROUTES } from '@/shared/constants';

export default [
  {
    path: '/',
    alias: '/products',
    name: ROUTES.Products.name,
    meta: {
      layout: ELayouts.COMMON,
      auth: true,
      title: ROUTES.Products.title,
    },
    component: () => import('@/pages/ProductsPage.vue'),
  },
  {
    path: '/shops',
    name: ROUTES.Shops.name,
    meta: {
      layout: ELayouts.COMMON,
      auth: true,
      title: ROUTES.Shops.title,
    },
    component: () => import('@/pages/ShopsPage.vue'),
  },
  {
    path: '/error',
    name: ROUTES.ErrorPage.name,
    meta: {
      layout: ELayouts.ERROR,
      title: ROUTES.ErrorPage.title,
    },
    props: true,
    component: () => import('@/pages/ErrorPage.vue'),
  },
  {
    path: '/auth',
    name: ROUTES.AuthForm.name,
    meta: {
      layout: ELayouts.AUTH,
      title: ROUTES.AuthForm.title,
    },
    component: () => import('@/pages/AuthPage.vue'),
  },
];
