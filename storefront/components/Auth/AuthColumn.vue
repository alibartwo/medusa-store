<template>
  <div class="hidden md:block relative w-full h-screen">
    <!-- Background image with Nuxt Image -->

    <NuxtImg
      src="/images/auth-background.png"
      alt="Auth background"
      format="webp"
      quality="80"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />

    <!-- Gradient overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-white/100 via-white/10 to-transparent z-10"
    />

    <!-- Logo (top-left) -->
    <NuxtLink to="/" class="absolute top-6 left-6 z-30 cursor-pointer">
      <NuxtImg src="/images/logo.png" alt="Logo" class="h-10 w-auto" />
    </NuxtLink>

    <!-- Text block -->
    <div
      class="absolute inset-0 z-20 flex items-start justify-center px-6 text-primary text-center pt-[25%]"
    >
      <div class="max-w-md">
        <h1 class="text-4xl font-bold mb-2">Hijyen her yerde seninle</h1>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate ut
          laoreet velit ma.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";
</script>
