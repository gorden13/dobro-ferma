<template>
  <ElCard shadow="hover" class="product-item-card">
    <template #header>
      <h4>{{ card.name }}</h4>
    </template>

    <div class="product-item-card__body">
      <UiImage :img-src="card.pictures" />

      <div class="product-item-card__props">
        <p class="product-item-card__price">
          цена:
          <strong>{{ card.price }}</strong>
        </p>
        <p>
          описание:
          {{ card.description }}
        </p>
      </div>
    </div>

    <template #footer>
      <div class="flex items-center"><ElButton type="text">Удалить</ElButton></div>
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
  .product-item-card {
    width: 250px;

    &__body {
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }

    &__props {
      display: flex;
      flex-direction: column;
    }

    &__price {
      &::after {
        padding-left: 4px;
        content: '₽';
      }
    }
  }
</style>
