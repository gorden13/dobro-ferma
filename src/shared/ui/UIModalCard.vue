<template>
  <ElDialog v-model="dialogVisibleModel" destroy-on-close append-to-body @close="closeModal">
    <template #default>
      <slot name="body"></slot>
    </template>

    <template #footer>
      <slot name="footer"></slot>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue';

  const props = defineProps({
    visible: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  });

  const emit = defineEmits<(e: 'update:visible', value: boolean) => void>();

  const dialogVisibleModel = computed({
    get() {
      return props.visible;
    },
    set(value: boolean) {
      emit('update:visible', value);
    },
  });

  const closeModal = () => {
    emit('update:visible', false);
  };
</script>
