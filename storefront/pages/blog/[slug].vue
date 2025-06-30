<template>
  <article class="max-w-screen-md px-4 py-16 mx-auto prose prose-purple">
    <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
    <NuxtImg
      v-if="post?.image"
      :src="post.image"
      :alt="post.title"
      class="w-full mb-8 rounded-xl"
      format="webp"
      quality="80"
      width="800"
      height="400"
    />
    <ContentRenderer :value="post" />
  </article>
</template>

<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});
</script>
