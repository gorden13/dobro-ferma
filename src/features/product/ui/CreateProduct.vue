<template>
  <UiModalCard v-model:visible="visibleModal" title="Создать карточку">
    <template #body>
      <ProductCardForm v-model:is-form-valid="isValidCreateProductCard" />
    </template>

    <template #footer>
      <ElButtonGroup>
        <ElButton @click="cancelCreateProduct">Отмена</ElButton>
        <ElButton type="primary" :disabled="!isValidCreateProductCard" @click="createProduct">Создать</ElButton>
      </ElButtonGroup>
    </template>
  </UiModalCard>
</template>

<script setup lang="ts">
  import { computed, PropType, ref } from 'vue';

  import { IProduct, ProductCardForm } from '@/entities/products';
  import { UiModalCard } from '@/shared/ui';

  const isValidCreateProductCard = ref(false);

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

  const emit = defineEmits<{
    (e: 'update:isVisible', value: boolean): void;
    (e: 'create', product: IProduct): void;
  }>();

  const visibleModal = computed({
    get() {
      return props.isVisible;
    },
    set(value: boolean) {
      emit('update:isVisible', value);
    },
  });

  const createProduct = async () => {
    //
  };

  const cancelCreateProduct = () => {
    //
  };
</script>

<style lang="scss" scoped>
  // .
</style>
