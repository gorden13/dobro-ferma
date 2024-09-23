<template>
  <ElCard class="product-card" body-class="product-card__body">
    <ElForm ref="ruleFormRef" :model="createForm" label-width="auto" :rules="rules" label-position="top" status-icon>
      <ElFormItem required label="Наименование" size="large" prop="name">
        <ElInput v-model="createForm.name" clearable show-word-limit maxlength="50" />
      </ElFormItem>

      <ElFormItem required label="Количество" class="product-card__short-field" prop="stock">
        <ElInput v-model.number="createForm.stock" size="large">
          <template #append>ШТ</template>
        </ElInput>
      </ElFormItem>

      <ElFormItem label="Вес" class="product-card__short-field" prop="weight">
        <ElInput v-model.number="createForm.weight" size="large">
          <template #append>КГ</template>
        </ElInput>
      </ElFormItem>

      <ElFormItem label="Описание" prop="description">
        <ElInput
          v-model="createForm.description"
          clearable
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          show-word-limit
          maxlength="300"
          size="large"
        />
      </ElFormItem>

      <ElFormItem required label="Цена" class="product-card__short-field" prop="price">
        <UiCurrencyInput v-model:model-value="createForm.price" size="large" clearable />
      </ElFormItem>

      <ElFormItem required label="Фото" prop="pictures[0]">
        <UiUpload v-model:file-list="createForm.pictures" жlimit="3" />
      </ElFormItem>
    </ElForm>
  </ElCard>
</template>

<script setup lang="ts">
  import { FormInstance, FormRules } from 'element-plus';
  import { PropType, reactive, ref, watch } from 'vue';

  import { IProductCreateRequest } from '@/entities/products';
  import { REQUIRED_RULE } from '@/shared/constants';
  import { UiCurrencyInput, UiUpload } from '@/shared/ui';

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
    (e: 'create', value: IProductCreateRequest): void;
  }>();

  const ruleFormRef = ref<FormInstance>();
  const rules = reactive<FormRules<IProductCreateRequest>>({
    name: [REQUIRED_RULE, { min: 3, message: 'Необходимо минимум 3 символа', trigger: 'blur' }],
    stock: [REQUIRED_RULE],
    price: [REQUIRED_RULE],
    pictures: [{ required: true, message: 'Необходимо загрузить минимум 1 файл', trigger: 'blur' }],
  });
  const createForm = reactive(props.modelValue);

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
      return;
    }

    await formEl.validate((valid) => {
      emit('update:isFormValid', valid);
    });
  };

  watch(
    () => createForm,
    (form: IProductCreateRequest) => {
      emit('update:modelValue', form);

      submitForm(ruleFormRef.value);
    },
    {
      deep: true,
      immediate: true,
    },
  );
</script>
