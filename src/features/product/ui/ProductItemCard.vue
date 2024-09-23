<template>
  <ElCard shadow="hover" class="product-item-card">
    <template #header>
      <h4>{{ card.name }}</h4>
    </template>

    <div class="product-item-card__body">
      <ElCarousel trigger="click" :autoplay="false">
        <ElCarouselItem v-for="picture in card.pictures" :key="picture">
          <div>
            <UiImage fit="contain" loading="lazy" style="height: 300px" :img-src="picture" />
          </div>
        </ElCarouselItem>
      </ElCarousel>

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
      <ElRow justify="end">
        <div class="flex items-center">
          <ElButton type="default">
            <ElText type="danger" @click="removeProductItem(card._id)">Удалить</ElText>
          </ElButton>
        </div>
      </ElRow>
    </template>
  </ElCard>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';

  import type { IProduct } from '@/entities/products';
  import UiImage from '@/shared/ui/UiImage.vue';

  defineProps({
    card: {
      type: Object as PropType<IProduct>,
      default: () => ({}),
    },
  });

  const emit = defineEmits<(event: 'remove', arg: string) => void>();

  const removeProductItem = (id: string) => {
    emit('remove', id);
  };
</script>

<style lang="scss" scoped>
  .product-item-card {
    width: 300px;

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
