<template><LoginSection /></template>

<script setup lang="ts">
import LoginSection from "~/components/Auth/LoginSection.vue";

definePageMeta({
  layout: "auth",
});

useSeoMeta({
  title: "Giriş Yap - Onbaby",
  description: "Onbaby hesabınıza giriş yapın. Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler.",
  ogTitle: "Giriş Yap - Onbaby",
  ogDescription: "Onbaby hesabınıza giriş yapın. Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler.",
});
</script>
