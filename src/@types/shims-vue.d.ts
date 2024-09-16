import VueRouter, { RouteRecord, Router, RouteConfig } from 'vue-router';

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    router?: VueRouter;
    $route: RouteRecord;
  }
}
