<template>
  <section class="px-4 py-16 bg-white">
    <div class="max-w-screen-md mx-auto">
      <!-- Section Heading -->
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold tracking-wide uppercase text-primary">
          Blog
        </p>
        <h2 class="mt-2 text-3xl font-bold text-primary">
          Güncel Yazılarla Yanınızdayız
        </h2>
        <p class="max-w-xl mx-auto mt-2 text-gray-500">
          Çocuk gelişimi, hijyen, pratik öneriler ve daha fazlası blog
          sayfamızda.
        </p>
      </div>

      <!-- Blog List -->
      <div class="space-y-6">
        <BlogCard
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :excerpt="post.description"
          :image="post.image"
          :slug="post.path"
          :date="post.date"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard from "@/components/Blog/BlogCard.vue";

const route = useRoute();
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection("blog")
    .select("title", "description", "path", "image", "date")
    .order("date", "DESC")
    .all();
});

useSeoMeta({
  title: "Blog - Çocuk Gelişimi ve Hijyen - BabyOn",
  description: "Çocuk gelişimi, hijyen ve pratik önerilerle ilgili güncel yazılar.",
});
</script>
