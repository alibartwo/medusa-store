<template>
    <ForgotPasswordSection />
</template>

<script setup lang="ts">
import ForgotPasswordSection from "@/components/Auth/ForgotPasswordSection.vue";
definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Şifremi Unuttum - Onbaby",
  description: "Onbaby hesabınızın şifresini mi unuttunuz? Şifrenizi sıfırlayın ve tekrar giriş yapın.",
  ogTitle: "Şifremi Unuttum - Onbaby",
  ogDescription: "Onbaby hesabınızın şifresini mi unuttunuz? Şifrenizi sıfırlayın ve tekrar giriş yapın.",
});
</script>
