<template>
  <ElWatermark :width="200" :height="50" class="watermark" :font="font" :content="['раздел в разработке']">
    <div class="demo" />
  </ElWatermark>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const font = reactive({
    color: 'rgba(0, 0, 0, .2)',
  });
</script>

<style lang="scss" scoped>
  .watermark {
    display: flex;
    flex: auto;

    .demo {
      flex: auto;
      height: calc(100vh - 100px);
    }
  }
</style>
