<script setup lang="ts">
  import { VerificationForm } from '@/entities/auth';
</script>

<template>
  <div class="auth-page">
    <VerificationForm />
  </div>
</template>

<style scoped lang="scss">
  .auth-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
