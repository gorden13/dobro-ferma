import { createPinia, PiniaVuePlugin } from 'pinia';
import Vue from 'vue';

Vue.use(PiniaVuePlugin);

export const pinia = createPinia();

pinia.use(({ store }) => {
  store.$api = Vue.prototype.$api;
});
