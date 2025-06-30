<template>
  <div class="flex flex-col items-center justify-center px-6 py-12">
    <div class="mb-6 text-center">
      <h2 class="text-3xl font-semibold text-gray-900">Hesap Oluştur</h2>
      <p class="mt-1 text-sm text-gray-500">
        onbaby ailesine katıl, hijyen her yerde seninle olsun.
      </p>
    </div>
    <RegisterForm />
  </div>
</template>

<script setup lang="ts">
import RegisterForm from "~/components/Forms/RegisterForm.vue";
</script>
