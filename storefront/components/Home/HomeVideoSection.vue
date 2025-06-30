<template>
  <section class="py-10">
    <div class="max-w-screen-xl mx-auto px-4">
      <h2
        class="text-center text-xl md:text-2xl font-semibold text-primary mb-6"
      >
        Kullanımı 1 dakikada öğrenin
      </h2>
      <div
        class="relative overflow-hidden rounded-3xl w-full max-w-none h-[400px]"
      >
        <NuxtImg
          src="/images/home-vid-bg.png"
          alt="Video Placeholder"
          class="w-full h-full object-cover object-bottom"
          width="1920"
          height="1080"
        />
        <button
          class="absolute inset-0 flex items-center justify-center group transition-all"
        >
          <div
            class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105"
          >
            <Icon
              name="uil:play"
              class="w-8 h-8 text-primary transition-all duration-200 group-hover:scale-110 group-hover:text-purple-800"
            />
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
