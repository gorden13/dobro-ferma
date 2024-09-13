<template>
  <div class="page-statuses-layout">
    <div class="page-statuses-layout__content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-statuses-layout {
    height: 100vh;
    padding-top: 240px;
    background-color: #ccc;
  }

  .page-statuses-layout__content {
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 48px;
    margin: 0 auto;
    background-color: #7ab0d4;
  }

  .page-statuses-layout__logo {
    margin-bottom: 32px;
  }
</style>
