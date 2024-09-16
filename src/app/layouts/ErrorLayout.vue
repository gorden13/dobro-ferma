<template>
  <div class="error-layout">
    <div class="error-layout__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error-layout {
    height: 100vh;
    padding-top: 240px;
    background-color: #ccc;
  }

  .error-layout__content {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 48px;
    margin: 0 auto;
    background-color: #7ab0d4;
  }

  .error-layout__logo {
    margin-bottom: 32px;
  }
</style>
