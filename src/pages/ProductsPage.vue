<template>
  <div class="products-page">
    <UiPageSubHeader>
      <template #right>
        <ElButton type="success" @click="openCreateProductModal">
          Создать товар
          <ElIcon class="el-icon--right"><Plus /></ElIcon>
        </ElButton>
      </template>
    </UiPageSubHeader>

    <CreateProduct v-model:edit-form="editFrom.data" v-model:is-visible="isVisibleCreateProductModal" />

    <div class="products-page__body">
      <ProductList @edit-product="showProduct" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElButton } from 'element-plus';
  import { reactive, ref } from 'vue';

  import { IProduct } from '@/entities/products';
  import { UiPageSubHeader } from '@/shared/ui';
  import { CreateProduct, ProductList } from '@/widgets/product';

  const isVisibleCreateProductModal = ref(false);

  const editFrom = {
    data: reactive<IProduct>({} as IProduct),
  };

  const openCreateProductModal = () => {
    editFrom.data = {} as IProduct;
    isVisibleCreateProductModal.value = true;
  };

  const showProduct = (product: IProduct) => {
    editFrom.data = product;

    isVisibleCreateProductModal.value = true;
  };
</script>

<style scoped lang="scss">
  .products-page {
    &__body {
      padding: 24px;
    }
  }
</style>
