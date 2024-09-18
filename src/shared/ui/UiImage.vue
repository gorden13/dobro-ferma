<template>
  <ElImage class="ui-image" :src="imgSrc" lazy>
    <template #error>
      <div class="ui-image__image-slot">
        <el-icon><icon-picture /></el-icon>
      </div>
    </template>
  </ElImage>
</template>

<script setup lang="ts">
  import { defineProps, PropType } from 'vue';

  defineProps({
    imgSrc: {
      type: String as PropType<string>,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .ui-image {
    &__image-slot {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 30px;
      color: var(--el-text-color-secondary);
      background: var(--el-fill-color-light);
    }
  }
</style>
