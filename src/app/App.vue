<template>
  <component :is="layout" name="app-layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
  import { computed, defineAsyncComponent, getCurrentInstance } from 'vue';

  import { ELayouts } from './constants';

  const CommonLayout = defineAsyncComponent(() => import('./layouts/CommonLayout.vue'));
  const ErrorLayout = defineAsyncComponent(() => import('./layouts/ErrorLayout.vue'));
  const AuthLayout = defineAsyncComponent(() => import('./layouts/AuthLayout.vue'));

  const app = getCurrentInstance()?.proxy;

  const layout = computed(() => {
    switch (app?.$route.meta?.layout) {
      case ELayouts.ERROR:
        return ErrorLayout;
      case ELayouts.COMMON:
        return CommonLayout;
      case ELayouts.AUTH:
        return AuthLayout;
      default:
        return AuthLayout;
    }
  });
</script>

<style lang="scss">
  @import './styles/';
</style>
