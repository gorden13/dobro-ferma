<template>
  <ElCard class="product-card">
    <ElForm label-width="auto">
      <ElFormItem label="Наименование">
        <ElInput v-model="createFormData.name" clearable />
      </ElFormItem>

      <ElFormItem label="Описание">
        <ElInput
          v-model="createFormData.description"
          clearable
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
        />
      </ElFormItem>

      <ElFormItem label="Цена">
        <ElInput
          v-model="createFormData.price"
          :formatter="(value: string) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')"
          :parser="(value: string) => value.replace(/\$\s?|(,*)/g, '')"
          clearable
        >
          <template #append>₽</template>
        </ElInput>
      </ElFormItem>

      <ElFormItem label="Вес">
        <ElInput v-model="createFormData.weight">
          <template #append>кг</template>
        </ElInput>
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
  .product-card {
    overflow: auto;
  }
</style>
