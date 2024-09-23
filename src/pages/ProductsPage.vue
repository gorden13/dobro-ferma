<template>
  <div class="products-page">
    <UiPageSubHeader>
      <template #right>
        <ElButton type="success" @click="isVisibleCreateProductModal = true">
          Создать товар
          <ElIcon class="el-icon--right"><Plus /></ElIcon>
        </ElButton>
      </template>
    </UiPageSubHeader>

    <CreateProduct v-model:is-visible="isVisibleCreateProductModal" />

    <div class="products-page__body">
      <ProductList />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElButton } from 'element-plus';
  import { ref } from 'vue';

  import { UiPageSubHeader } from '@/shared/ui';
  import { CreateProduct, ProductList } from '@/widgets/product';

  const isVisibleCreateProductModal = ref(false);
</script>

<style scoped lang="scss">
  .products-page {
    &__body {
      padding: 24px;
    }
  }
</style>
