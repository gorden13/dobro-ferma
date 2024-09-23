<template>
  <ElDialog
    v-model="dialogVisibleModel"
    style="max-width: 300px"
    modal-class="ui-simple-dialog"
    destroy-on-close
    append-to-body
  >
    <template #default>
      <div class="ui-simple-dialog__body"></div>
      <!-- <InfoFilled /> -->

      <h4 class="ui-simple-dialog__title">
        {{ title }}
      </h4>
    </template>

    <template #footer>
      <slot name="footer">
        <div class="ui-simple-dialog__buttons">
          <ElButton type="default" @click="dialogVisibleModel = false">{{ cancelText }}</ElButton>
          <ElButton type="success" @click="submitEvent">{{ submitText }}</ElButton>
        </div>
      </slot>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  type Props = {
    title: string;
    cancelText?: string;
    submitText: string;
    visible: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    title: '',
    cancelText: 'Отмена',
    submitText: '',
    visible: false,
  });

  const emit = defineEmits<{ (e: 'update:visible', value: boolean): void; (e: 'submit'): void }>();

  const dialogVisibleModel = computed({
    get() {
      return props.visible;
    },
    set(value: boolean) {
      emit('update:visible', value);
    },
  });

  const submitEvent = () => {
    emit('submit');
    dialogVisibleModel.value = false;
  };
</script>

<style lang="scss" scoped>
  .ui-simple-dialog {
    &__body {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
    }

    &__body-icon {
      width: 104px;
      height: 104px;
      color: var(--color-1);
    }

    &__buttons {
      display: flex;
      gap: 8px;
    }
  }
</style>
