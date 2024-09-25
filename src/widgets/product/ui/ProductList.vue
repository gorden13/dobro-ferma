<template>
  <div v-loading="isLoading" class="products-list">
    <div class="products-list__search-block">
      <!-- coming soon -->
    </div>

    <ProductItemCard
      v-for="product of products"
      :key="product._id"
      :card="product"
      @remove="removeProduct"
      @get-card="getProductById"
    />
  </div>
</template>

<script setup lang="ts">
  import { ElMessage, ElMessageBox } from 'element-plus';
  import { ref } from 'vue';

  import { IProduct, useProductsStore } from '@/entities/products';
  import { ProductItemCard } from '@/features/product';

  const productsStore = useProductsStore();
  const products = ref<IProduct[]>([]);
  const isLoading = ref(false);

  const emit = defineEmits<(event: 'edit-product', product: IProduct) => void>();

  const getProducts = async () => {
    isLoading.value = true;
    const result = await productsStore.getProductsList();

    isLoading.value = false;

    products.value = result;
  };

  getProducts();

  const removeProduct = (id: string) => {
    ElMessageBox.confirm('Карточка товара будет удалена. Продолжить?', '', {
      confirmButtonText: 'Да',
      cancelButtonText: 'Отмена',
      type: 'warning',
    })
      .then(async () => {
        try {
          isLoading.value = true;

          await productsStore.removeProduct(id);

          ElMessage({
            type: 'success',
            message: 'Товар успешно удален!',
          });

          getProducts();
        } catch (error) {
          ElMessage({
            type: 'error',
            message: `Ошибка удаления! ${error}`,
          });
        } finally {
          isLoading.value = false;
        }
      })
      .catch(() => {});
  };

  const getProductById = async (id: string) => {
    try {
      isLoading.value = true;

      const result = await productsStore.getProductById(id);

      emit('edit-product', result);
    } catch (error) {
      ElMessage({
        type: 'error',
        message: `Ошибка получения продукта! ${error}`,
      });
    } finally {
      isLoading.value = false;
    }
  };
</script>

<style lang="scss" scoped>
  .products-list {
    display: flex;
    flex-flow: wrap;
    gap: 10px;
  }
</style>
