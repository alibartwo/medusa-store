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
  title: 'Hakkımızda - BabyOn',
  description: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. BabyOn ile hayatı kolaylaştırın.',
  ogTitle: 'Hakkımızda - BabyOn',
  ogDescription: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. BabyOn ile hayatı kolaylaştırın.',

})
</script>