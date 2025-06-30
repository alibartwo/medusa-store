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
  title: 'Onbaby - Pratik Hijyen Ürünleri',
  description: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. Onbaby ile hayatı kolaylaştırın.',
  ogTitle: 'Onbaby - Pratik Hijyen Ürünleri',
  ogDescription: 'Çocuklar ve aileler için hijyenik, pratik ve tek kullanımlık ürünler. Onbaby ile hayatı kolaylaştırın.',
})
</script>