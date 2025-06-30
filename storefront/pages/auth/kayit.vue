<template>
  <SignupSection />
</template>

<script setup lang="ts">
import SignupSection from '~/components/Auth/SignupSection.vue'

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Kayıt Ol - Onbaby',
  description: 'Onbaby hesabınızı oluşturun. Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler.',
  ogTitle: 'Kayıt Ol - Onbaby',
  ogDescription: 'Onbaby hesabınızı oluşturun. Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler.'
})
</script>
