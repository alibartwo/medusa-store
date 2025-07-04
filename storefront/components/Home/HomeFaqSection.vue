<!-- components/FaqSection.vue -->
<template>
  <section class="max-w-3xl py-16 mx-auto text-center">
    <p class="text-sm font-semibold tracking-widest uppercase text-primary">
      SSS
    </p>
    <h2 class="mt-2 text-3xl font-bold text-primary">Sıkça Sorulan Sorular</h2>
    <p class="max-w-xl mx-auto mt-4 text-gray-500">
      Bizi daha yakından tanımak ve ürünlerimiz hakkında merak ettiklerinizi öğrenmek için aşağıdaki soruları inceleyebilirsiniz. Aklınıza takılan başka bir konu olursa bizimle iletişime geçmekten çekinmeyin.
    </p>

    <div class="flex justify-center gap-4 mt-6">
      <BaseButton label="Siz de Deneyin →" type="primary" to="/urun"/>
      <BaseButton label="Tümünü Gör" type="secondary" to="/sss" />
    </div>

    <div class="flex flex-col gap-4 mt-10 text-left">
      <FaqItem v-for="(item, index) in shortFaqList" :key="index" :question="item.question" :answer="item.answer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FaqItem from "../Faq/HomeFaqItem.vue";
import { faqList } from "~/data/faq";
const shortFaqList = faqList.slice(0, 5);
</script>
