<template>
  <ElUpload
    v-model:file-list="fileListModel"
    class="upload-field"
    action="https://dskweb.ru/api/uploads/product/"
    list-type="picture-card"
    :auto-upload="false"
    multiple
    drag
    with-credentials
    accept="image/png, image/jpeg"
    :limit="3"
  >
    <ElIcon class="el-icon--upload" :size="32"><UploadFilled color="var(--el-color-primary)" /></ElIcon>

    <div class="el-upload__text">
      <ElText type="primary">Выберите файлы (Максимум {{ limit }})</ElText>
    </div>
  </ElUpload>
</template>

<script setup lang="ts">
  import { computed, PropType } from 'vue';

  const props = defineProps({
    fileList: {
      type: Array as PropType<File[]>,
      default: () => [],
    },
    limit: {
      type: Number as PropType<number>,
      default: 3,
    },
  });

  const emit = defineEmits<(e: 'update:fileList', files: File[]) => void>();

  const fileListModel = computed({
    get() {
      return props.fileList;
    },
    set(fileList: File[]) {
      emit('update:fileList', fileList);
    },
  });
</script>

<style lang="scss" scoped>
  .upload-field {
    width: 100%;

    &:deep(.el-upload-list--picture-card) {
      width: 100%;
    }

    &:deep(.el-upload) {
      width: 100%;
      height: 92px;

      .el-upload-list {
        width: 100%;
      }

      .el-upload-dragger {
        height: 90px;
        padding: 0;
        padding-top: 8px;
        border: none;
      }
    }
  }
</style>
