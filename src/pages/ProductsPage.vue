<template>
  <div class="products-page">
    <ul class="products-list">
      <li v-for="product of products" :key="product.id" class="products-list__item">
        <div>
          <h4>
            {{ product.name }}
          </h4>

          <p>{{ product.category === 'other' ? 'прочее' : '' }}</p>
        </div>

        <div>цена: {{ product.price }} р</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { IProduct } from '@/entities/products';
  import { useProductsStore } from '@/entities/products/store';

  const productsStore = useProductsStore();
  const products = ref<IProduct[]>([]);

  const getProducts = async () => {
    const result = await productsStore.getProductsList();

    products.value = result;
  };

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
