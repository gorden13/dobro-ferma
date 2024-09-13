<template>
  <div class="products-page">
    <h1>
      {{ title }}
    </h1>

    <ul>
      <li v-for="product of products" :key="product.id">
        <h4>
          {{ product.name }}
        </h4>

        <p>
          {{ product.category }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { IProduct } from '@/entities/products';
  import { useProductsStore } from '@/entities/products/store';

  const productsStore = useProductsStore();

  const title = 'Эта страница с продукцией';

  const getProducts = async () => {
    await productsStore.getProductsList({
      page: {
        pageNumber: 1,
        pageSize: 20,
        sortProperties: [],
      },
      search: '',
    });

    Object.assign([], productsStore.productsList);
  };

  const products = ref<IProduct[]>([]);

  getProducts();
</script>

<style scoped lang="scss">
  // empty
</style>
