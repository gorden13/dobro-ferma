import { ROUTES } from './routesMap';

import { MenuItem } from '@/shared/types';

export const SIDEBAR_MENU: MenuItem[] = [
  {
    name: ROUTES.Products.title,
    route: { name: ROUTES.Products.name },
    icon: {
      namespace: 'navigation',
      name: 'group-of-persons',
    },
  },
  {
    name: ROUTES.ErrorPage.title,
    route: { name: ROUTES.ErrorPage.name },
    icon: {
      namespace: 'navigation',
      name: 'pie-chart',
    },
  },
];
