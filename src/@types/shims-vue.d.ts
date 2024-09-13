import VueRouter, { router, Router } from 'vue-router';

import VueRouter, { Route, NavigationGuard } from './index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $router: Router;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
  }
}
