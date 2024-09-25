<template>
  <UiModalCard v-model:visible="visibleModal" style="max-width: 700px" fullscreen :title="cardTitle">
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

        <ElButton v-if="isNewCard" type="success" :disabled="!isValidCreateProductCard" @click="createProduct">
          Создать
        </ElButton>

        <ElButton v-else type="primary" :disabled="!isValidCreateProductCard" @click="createProduct">
          Сохранить
        </ElButton>
      </ElRow>
    </template>
  </UiModalCard>
</template>

<script setup lang="ts">
  import { ElNotification } from 'element-plus';
  import { cloneDeep } from 'lodash';
  import { computed, onUnmounted, PropType, reactive, ref, watch } from 'vue';

  import { IProduct, IProductCreateRequest, useProductsStore } from '@/entities/products';
  import { ProductCardForm } from '@/features/product';
  import { UiModalCard } from '@/shared/ui';

  const productsStore = useProductsStore();

  const isValidCreateProductCard = ref(false);
  const isLoading = ref(false);
  const createForm = reactive<IProductCreateRequest>({
    name: '',
    images: [],
    description: '',
    category: '',
    available: true,
    discount: 0,
    price: null,
    stock: 1,
    weight: null,
    author: '66e7f4994d8a72a78d4a7aea',
  });

  const createFormCopy = cloneDeep(createForm);

  const props = defineProps({
    isVisible: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    editForm: {
      type: Object as PropType<IProduct>,
      default: () => ({}),
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

  const isNewCard = computed(() => {
    return !createForm._id;
  });

  const cardTitle = computed(() => {
    return isNewCard.value ? 'Создать товар' : 'Редактировать товар';
  });

  const createProductHandler = async (data: FormData) => {
    try {
      isLoading.value = true;

      await productsStore.createProduct(data);

      ElNotification({
        message: 'Товар успешно создан!',
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

  const updateProductHandler = async (id: string, data: FormData) => {
    try {
      isLoading.value = true;

      await productsStore.updateProduct(id, data);

      ElNotification({
        message: 'Товар успешно сохранён!',
        type: 'success',
      });

      visibleModal.value = false;
    } catch (error) {
      ElNotification({
        message: 'Ошибка сохранения товара',
        type: 'error',
      });
    } finally {
      isLoading.value = false;
    }
  };

  const createProduct = async () => {
    const data: IProductCreateRequest = {
      available: true,
      category: 'other',
      price: createForm.price,
      name: createForm.name,
      stock: createForm.stock,
      weight: createForm.weight,
      author: createForm.author,
      description: createForm.description,
    };

    const product = new FormData();

    Object.keys(data).forEach((key: string) => {
      const value = data[key as keyof IProductCreateRequest];
      product.append(key, `${value}`);
    });
    createForm.images?.forEach((item) => {
      product.append(`images`, item?.raw as Blob);
    });

    if (createForm._id) {
      updateProductHandler(createForm._id, product);
    } else {
      createProductHandler(product);
    }
  };

  const cancelCreateProduct = () => {
    emit('update:isVisible', false);
  };

  watch(
    () => props.editForm._id,
    (value: string) => {
      if (value) {
        Object.assign(createForm, props.editForm);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        createForm.images = createForm.images?.map((item) => {
          return {
            name: 'name',
            url: item,
          };
        });
      } else {
        delete createForm._id;
        Object.assign(createForm, createFormCopy);
      }
    },
  );
</script>
