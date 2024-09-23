<template>
  <div v-loading="isLoading" class="products-list">
    <div class="products-list__search-block">
      <!-- coming soon -->
    </div>

    <ProductItemCard
      v-for="product of products"
      :key="product._id"
      :card="product"
      @remove="visibleRemoveModal = true"
    />

    <UiSimpleDialog
      v-model:visible="visibleRemoveModal"
      title="Удалить контрагента?"
      submit-text="Удалить"
      @submit="removeParticipant"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { IProduct, useProductsStore } from '@/entities/products';
  import { ProductItemCard } from '@/features/product';
  import { UiSimpleDialog } from '@/shared/ui';

  const productsStore = useProductsStore();
  const products = ref<IProduct[]>([]);
  const isLoading = ref(false);
  const visibleRemoveModal = ref(false);

  const getProducts = async () => {
    isLoading.value = true;
    const result = await productsStore.getProductsList();

    isLoading.value = false;

    products.value = result;
  };

  getProducts();

  const removeParticipant = async (id: string) => {
    visibleRemoveModal.value = true;
    console.log(id);
  };
</script>

<style lang="scss" scoped>
  .products-list {
    display: flex;
    flex-flow: wrap;
    gap: 10px;
  }
</style>
