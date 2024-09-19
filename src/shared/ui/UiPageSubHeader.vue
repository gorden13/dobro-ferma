<template>
  <div class="page-sub-header">
    <div v-if="$slots['left']" class="page-sub-header__left">
      <slot name="left"></slot>
    </div>

    <div v-if="$slots['right']" class="page-sub-header__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-sub-header {
    display: flex;
    align-items: center;
    padding: 12px 24px;
    background: #fff;
    border-bottom: 1px solid lightgrey;

    &__right {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      margin-left: auto;
    }
  }
</style>
