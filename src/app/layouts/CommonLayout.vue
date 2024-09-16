<template>
  <ElContainer class="common-layout">
    <ElAside class="common-layout__menu" width="200px">
      <div class="common-layout__logo">
        <ElImage
          class="common-layout__logo-image"
          fit="cover"
          src="https://png.pngtree.com/png-vector/20190322/ourlarge/pngtree-eco-farm-logo-vector-template-design-illustration-png-image_859744.jpg"
        />
      </div>

      <ElMenu
        default-active="/"
        :router="true"
        class="common-layout__navigation"
        @open="handleOpen"
        @close="handleClose"
      >
        <ElMenuItem default-active index="/">Продукция</ElMenuItem>

        <ElMenuItem index="/shops" disabled>
          <ElBadge type="success" value="new">Магазины</ElBadge>
        </ElMenuItem>
      </ElMenu>
    </ElAside>
    <ElContainer>
      <ElHeader class="common-layout__header">
        <div class="common-layout__actions-panel"></div>
        <div class="common-layout__user-panel">
          <ElAvatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
        </div>
      </ElHeader>
      <ElMain class="common-layout__main">
        <router-view />
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<script setup lang="ts">
  import { ElAside, ElContainer, ElHeader, ElAvatar, ElMain, ElMenu, ElMenuItem, ElBadge } from 'element-plus';
  import { ref } from 'vue';

  const handleOpen = (key: string, keyPath: string[]) => {
    //
  };
  const handleClose = (key: string, keyPath: string[]) => {
    //
  };
</script>

<style lang="scss" scoped>
  .common-layout {
    height: 100vh;

    &__menu {
      background-color: var(--el-color-success-light-8);
    }

    &__header {
      display: flex;
      justify-content: space-between;
      background-color: var(--el-color-primary-light-7);
    }

    &__main {
      background-color: var(--el-color-white);
    }

    &__logo {
      height: 125px;
    }

    &__logo-image {
      width: 100%;
      height: 125px;
    }

    &__user-panel {
      display: flex;
      align-items: center;
    }
  }
</style>
