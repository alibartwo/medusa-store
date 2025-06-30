<template>
  <div>
    <AboutHero />
    <AboutWhoWeAre />
    <AboutStatsGrid />
    <InstagramSection />
  </div>
</template>

<script setup lang="ts">
import InstagramSection from '~/components/Common/InstagramSection.vue'

useSeoMeta({
  title: 'Hakkımızda - Onbaby',
  description: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. Onbaby ile hayatı kolaylaştırın.',
  ogTitle: 'Hakkımızda - Onbaby',
  ogDescription: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. Onbaby ile hayatı kolaylaştırın.',

})
</script>