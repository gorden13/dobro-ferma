<template>
  <ElCard class="create-product-card">
    <ElForm>
      <ElFormItem label="Наименование">
        <ElInput v-model="createFormData.name" />
      </ElFormItem>

      <ElFormItem label="Описание">
        <ElInput v-model="createFormData.name" />
      </ElFormItem>

      <ElFormItem label="Цена">
        <ElInput v-model="createFormData.name" />
      </ElFormItem>

      <ElFormItem label="Вес (кг)">
        <ElInput v-model="createFormData.weight" />
      </ElFormItem>
    </ElForm>
  </ElCard>
</template>

<script setup lang="ts">
  import { PropType, reactive } from 'vue';

  import { IProduct } from '../api';

  const props = defineProps({
    isFormValid: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const createFormData = reactive<IProduct>({
    name: '',
    pictures: '',
    description: '',
    id: '',
    category: '',
    author: '',
    available: true,
    createdAt: '',
    discount: 0,
    likes: [],
    price: 0,
    review: [],
    stock: 0,
    tags: [],
    updatedAt: '',
    weight: 0,
  });
</script>

<style scoped>
  .create-product-card {
    overflow: auto;
  }
</style>
