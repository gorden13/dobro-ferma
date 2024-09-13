<template>
  <div id="app">
    <component :is="layout" name="app-layout">
      <router-view />
    </component>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent, getCurrentInstance } from 'vue';

  import { ELayouts } from './constants';

  const CommonLayout = defineAsyncComponent(() => import('./layouts/CommonLayout.vue'));
  const PageStatusesLayout = defineAsyncComponent(() => import('./layouts/PageStatusesLayout.vue'));

  const app = getCurrentInstance()?.proxy;

  const layout = computed(() => {
    switch (app?.$route.meta?.layout) {
      case ELayouts.ERROR:
        return PageStatusesLayout;
      case ELayouts.COMMON:
        return CommonLayout;
      default:
        return CommonLayout;
    }
  });
</script>

<style lang="scss">
  @import './styles/';
</style>
