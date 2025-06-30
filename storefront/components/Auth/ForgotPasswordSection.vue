<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-4">
    <h1 class="text-2xl font-bold text-primary mb-6 text-center">
      Şifremi Unuttum
    </h1>
    <p class="text-gray-600 text-sm text-center mb-8">
      Kayıtlı e-posta adresinizi girin, size bir şifre sıfırlama bağlantısı gönderelim.
    </p>

    <ForgotPasswordForm />
  </section>
</template>

<script setup lang="ts">
import ForgotPasswordForm from "~/components/Forms/ForgotPasswordForm.vue";
</script>
