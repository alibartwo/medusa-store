<script setup lang="ts">
defineProps<{
  title: string;
  excerpt: string;
  image?: string;
  slug: string;
  date: string;
}>();
</script>

<template>
  <div class="group flex gap-6 p-6 rounded-3xl bg-secondary hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
    <div class="flex-shrink-0 w-70 h-50 overflow-hidden rounded-xl">
      <NuxtImg :src="image" :alt="title"
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" width="160"
        height="160" loading="lazy" />
    </div>
    <div class="flex flex-col justify-between flex-1">
      <div>
        <h3 class="text-lg font-semibold transition-colors text-primary group-hover:text-primary/80 line-clamp-2">
          {{ title }}
        </h3>
        <p class="mt-2 text-sm text-gray-700 line-clamp-3">
          {{ excerpt }}
        </p>
      </div>
      <div class="flex justify-between w-full">
        <p class="relative text-xs text-gray-500 top-3">{{ date }}</p>
        <BaseButton label="Detayları Gör →" type="primary" class="px-4 py-2 text-xs" :to="slug" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
