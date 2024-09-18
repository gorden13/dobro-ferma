<template>
  <ElCard class="product-card">
    <template #header>{{ card.name }}</template>

    <div class="product-card__body">
      <UiImage :img-src="card.pictures" />

      <div>цена: {{ card.price }} р</div>
    </div>

    <template #footer>
      <ElButton type="success">В корзину</ElButton>
    </template>
  </ElCard>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';

  import { type IProduct } from '../api';

  import UiImage from '@/shared/ui/UiImage.vue';

  defineProps({
    card: {
      type: Object as PropType<IProduct>,
      default: () => ({}),
    },
  });
</script>

<style lang="scss" scoped>
  .product-card {
    &__body {
      display: flex;
      align-items: center;
    }
  }
</style>
