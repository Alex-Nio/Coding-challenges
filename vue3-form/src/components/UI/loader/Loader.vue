<script setup>
  import { ref } from 'vue';

  const loading = ref(true);

  // Пример использования: можно установить loading в false после загрузки данных
  setTimeout(() => {
    loading.value = false;
  }, 1000);
</script>

<template>
  <div
    v-if="loading"
    class="preloader"
  >
    <div class="spinner"></div>
  </div>
</template>

<style lang="scss" scoped>
  .preloader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1000;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
