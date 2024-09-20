<template>
  <ElCard class="product-card">
    <ElForm label-width="auto">
      <ElFormItem label="Наименование">
        <ElInput v-model="createForm.name" clearable show-word-limit maxlength="50" />
      </ElFormItem>

      <ElFormItem label="Описание">
        <ElInput
          v-model="createForm.description"
          clearable
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          show-word-limit
          maxlength="300"
        />
      </ElFormItem>

      <ElFormItem label="Цена" class="product-card__short-field">
        <UiCurrencyInput :model-value="createForm.price" />
      </ElFormItem>

      <ElFormItem label="Вес" class="product-card__short-field">
        <ElInput v-model="createForm.weight">
          <template #append>кг</template>
        </ElInput>
      </ElFormItem>

      <ElFormItem>
        <ElUpload v-model:file-list="createForm.pictures" class="upload-field">
          <ElIcon class="el-icon--upload" :size="32"><UploadFilled color="var(--el-color-primary)" /></ElIcon>

          <div class="el-upload__text">
            <ElText type="primary">перетащите файлы для загрузки фото</ElText>
          </div>

          <template #tip>
            <div class="el-upload__tip">файлы jpg/png с максимальным размером 500 кб</div>
          </template>
        </ElUpload>
      </ElFormItem>
    </ElForm>
  </ElCard>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue';

  import { IProductCreateRequest } from '../api';

  import { UiCurrencyInput } from '@/shared/ui';

  const props = defineProps({
    isFormValid: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    modelValue: {
      type: Object as PropType<IProductCreateRequest>,
      default: () => ({}),
    },
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: IProductCreateRequest): void;
    (e: 'update:isFormValid', value: boolean): void;
  }>();

  const createForm = computed({
    get() {
      return props.modelValue;
    },
    set(form: IProductCreateRequest) {
      emit('update:modelValue', form);
    },
  });
</script>

<style lang="scss" scoped>
  .upload-field {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;
    border: 1px dashed var(--el-color-primary);

    &:deep(.el-upload) {
      gap: 8px;
    }
  }
</style>
