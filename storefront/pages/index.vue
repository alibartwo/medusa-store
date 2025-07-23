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
  title: 'BabyOn - Pratik Hijyen Ürünleri',
  description: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. BabyOn ile hayatı kolaylaştırın.',
  ogTitle: 'BabyOn - Pratik Hijyen Ürünleri',
  ogDescription: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. BabyOn ile hayatı kolaylaştırın.',
})
</script>