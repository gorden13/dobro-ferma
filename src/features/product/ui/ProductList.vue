<template>
  <div class="products-list">
    <ProductItemCard v-for="product of products" :key="product.id" :card="product" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { IProduct, ProductItemCard, useProductsStore } from '@/entities/products';

  const productsStore = useProductsStore();
  const products = ref<IProduct[]>([]);

  const getProducts = async () => {
    const result = await productsStore.getProductsList();

    products.value = result;
  };

  getProducts();
</script>

<style lang="scss" scoped>
  .products-list {
    display: flex;
    flex-flow: wrap;
    gap: 10px;
  }
</style>
