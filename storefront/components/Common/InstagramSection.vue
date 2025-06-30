<template>
  <section class="pt-12 bg-white">
    <div class="w-full px-0">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        <div
          v-for="index in 4"
          :key="index"
          class="relative overflow-hidden group"
        >
          <NuxtImg
            :src="`/images/ig-${index}.png`"
            :alt="`Instagram post ${index}`"
            width="1200"
            height="1200"
            class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>
