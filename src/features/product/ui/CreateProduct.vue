<template>
  <UiModalCard v-model:visible="visibleModal" style="max-width: 500px" title="Создать карточку">
    <template #body>
      <ProductCardForm
        v-model:model-value="createForm"
        v-model:is-form-valid="isValidCreateProductCard"
        v-loading="isLoading"
      />
    </template>

    <template #footer>
      <ElRow justify="end">
        <ElButton @click="cancelCreateProduct">Отмена</ElButton>
        <ElButton type="success" :disabled="!isValidCreateProductCard" @click="createProduct">Создать</ElButton>
      </ElRow>
    </template>
  </UiModalCard>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';
  import { computed, h, PropType, reactive, ref } from 'vue';

  import { IProductCreateRequest, ProductCardForm, useProductsStore } from '@/entities/products';
  import { UiModalCard } from '@/shared/ui';

  const productsStore = useProductsStore();

  const isValidCreateProductCard = ref(true);
  const isLoading = ref(false);
  const createForm = reactive<IProductCreateRequest>({
    name: '',
    pictures: [],
    description: '',
    category: '',
    available: true,
    discount: 0,
    price: null,
    stock: 0,
    weight: null,
    _id: '66e7f4994d8a72a78d4a7aea',
  });

  const props = defineProps({
    isVisible: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    isValid: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const emit = defineEmits<(e: 'update:isVisible', value: boolean) => void>();

  const visibleModal = computed({
    get() {
      return props.isVisible;
    },
    set(value: boolean) {
      emit('update:isVisible', value);
    },
  });

  const createProduct = async () => {
    const data: IProductCreateRequest = {
      available: true,
      category: 'other',
      price: createForm.price,
      name: createForm.name,
      stock: createForm.stock,
      weight: createForm.weight,
      _id: createForm._id,
    };

    try {
      isLoading.value = true;

      await productsStore.createProduct(data);

      ElNotification({
        message: 'Товар успешно создан',
        type: 'success',
      });

      visibleModal.value = false;
    } catch (error) {
      ElNotification({
        message: 'Ошибка создания товара',
        type: 'error',
      });
    } finally {
      isLoading.value = false;
    }
  };

  const cancelCreateProduct = () => {
    //
  };
</script>

<style lang="scss" scoped>
  // .
</style>
