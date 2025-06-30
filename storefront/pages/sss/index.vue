<template>
  <section class="max-w-4xl py-16 px-4 mx-auto">
    <h1 class="text-3xl font-bold text-center text-primary mb-6">
      Sıkça Sorulan Sorular
    </h1>
    <p class="text-center text-gray-500 max-w-2xl mx-auto mb-10">
      Onbaby ürünleri hakkında en çok merak edilenleri burada bulabilirsiniz.
    </p>

    <div class="flex flex-col divide-y border-y border-gray-200">
      <PageFaqItem
        v-for="(item, index) in faqList"
        :key="index"
        :question="item.question"
        :answer="item.answer"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import PageFaqItem from "~/components/Faq/PageFaqItem.vue";
import { faqList } from "~/data/faq";
</script>
