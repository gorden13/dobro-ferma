<template>
  <ElCard class="verification-form">
    <ElForm label-position="top">
      <ElFormItem label="Номер телефона" required>
        <ElInput v-model="authForm.phoneNumber" placeholder="+7" />
      </ElFormItem>

      <ElFormItem v-if="authForm.verificationCode === 0">
        <ElButton class="verification-form__form-item-btn" type="success" @click="sendSMS">Отправить код</ElButton>
      </ElFormItem>

      <ElFormItem v-if="authForm.verificationCode !== 0" label="Смс-код">
        <ElInput v-model="authForm.verificationCode" />
      </ElFormItem>

      <ElFormItem v-if="authForm.verificationCode !== 0">
        <ElButton
          class="verification-form__form-item-btn"
          type="success"
          :disabled="isSubmitBtnDisabled"
          @click="submitForm"
        >
          Войти
        </ElButton>
      </ElFormItem>
    </ElForm>
  </ElCard>
</template>

<script setup lang="ts">
  import { getCurrentInstance, reactive, ref } from 'vue';

  import { useAuthStore } from '@/entities/auth';
  import { IVerificationForm } from '@/entities/auth/api/dto';
  import { delay } from '@/shared/utils';

  const app = getCurrentInstance()?.proxy;

  const isSubmitBtnDisabled = ref(true);
  const autStore = useAuthStore();
  const authForm = reactive<IVerificationForm>({
    phoneNumber: '',
    verificationCode: 0,
  });

  const sendSMS = async () => {
    await delay(500);

    authForm.verificationCode = 3832;

    await delay(500);

    const result = await autStore.logIn(authForm);

    if (result.success) {
      autStore.$patch({
        isAuthenticated: true,
      });
    }

    isSubmitBtnDisabled.value = false;
  };

  const submitForm = () => {
    app?.$router.push({ name: 'products' });
  };
</script>

<style scoped lang="scss">
  .verification-form {
    box-shadow: var(--el-box-shadow-light);

    &__form-item-btn {
      width: 100%;
    }
  }
</style>
