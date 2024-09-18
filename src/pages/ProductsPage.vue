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

    <UIModalCard v-model:visible="isVisibleCreateProductModal" title="Создать карточку">
      <template #body>
        <CreateProductCard v-model:is-form-valid="isValidCreateProductCard" />
      </template>

      <template #footer>
        <ElButtonGroup>
          <ElButton @click="isVisibleCreateProductModal = false">Отмена</ElButton>
          <ElButton type="primary" :disabled="!isValidCreateProductCard">Сохранить</ElButton>
        </ElButtonGroup>
      </template>
    </UIModalCard>

    <div class="products-page__list">
      <ProductCard v-for="product of products" :key="product.id" :card="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ElButton } from 'element-plus';
  import { ref, watch } from 'vue';

  import { CreateProductCard, IProduct, ProductCard } from '@/entities/products';
  import { useProductsStore } from '@/entities/products/store';
  import { UIModalCard, UiPageSubHeader } from '@/shared/ui';

  const productsStore = useProductsStore();
  const products = ref<IProduct[]>([]);
  const isVisibleCreateProductModal = ref(false);
  const isValidCreateProductCard = ref(false);

  const getProducts = async () => {
    const result = await productsStore.getProductsList();

    products.value = result;
  };

  watch(
    () => isVisibleCreateProductModal.value,
    (value: boolean) => {
      console.log(value);
    },
  );

  getProducts();
</script>

<style scoped lang="scss">
  .products-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      padding: 0 16px;
      margin: 10px;
      color: var(-el-color-info-light-5);
      background: var(--el-color-primary-light-9);
    }
  }
</style>
