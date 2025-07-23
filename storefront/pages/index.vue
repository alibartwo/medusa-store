<template>
    <div>
        <HomeHero />
        <HomeWhyUs />
        <HomeUseCases />
        <HomeVideoSection />
        <HomeTestimonials />
        <HomeBlogSection />
        <FaqSection />
        <InstagramSection />
    </div>
</template>

<script lang="ts" setup>
import FaqSection from '~/components/Home/HomeFaqSection.vue'
import InstagramSection from '~/components/Common/InstagramSection.vue'

useSeoMeta({
  title: 'BabyON - Pratik Hijyen Ürünleri',
  description: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. BabyON ile hayatı kolaylaştırın.',
  ogTitle: 'BabyON - Pratik Hijyen Ürünleri',
  ogDescription: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. BabyON ile hayatı kolaylaştırın.',
})
</script>