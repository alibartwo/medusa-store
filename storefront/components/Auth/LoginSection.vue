<template>
  <div class="flex flex-col items-center justify-center px-6 py-12">
    <div class="mb-6">
      <h2 class="text-3xl font-semibold text-gray-900">Tekrar Hoş Geldin!</h2>
      <p class="mt-1 text-sm text-gray-500">Meet the good taste today</p>
    </div>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/Forms/LoginForm.vue'
</script>
