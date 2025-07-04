<template>
  <section class="relative px-4 py-12">
    <div class="relative flex flex-col items-stretch justify-between h-full max-w-screen-xl gap-8 px-12 py-12 mx-auto bg-secondary rounded-3xl md:flex-row">
      <div class="z-0 flex flex-col justify-between h-full md:w-5/12">
        <div class="flex-grow md:h-[330px]">
          <h3 class="text-sm font-semibold tracking-widest uppercase text-primary">
            Blog
          </h3>
          <h2 class="mt-2 text-3xl font-bold text-primary">
            Güncel Yazılarla Yanınızdayız
          </h2>
          <p class="max-w-md mt-2 text-gray-500">
            Çocuk gelişimi, hijyen, pratik öneriler ve daha fazlası blog
            sayfamızda.
          </p>
          <div class="mt-6">
            <BaseButton label="Tümünü Gör →" type="primary" to="/blog"/>
          </div>
        </div>
        <div class="flex self-start gap-4 pt-8">
          <button :class="blogIndex === 0
              ? 'bg-secondary text-black'
              : 'bg-primary text-white'
            "
            class="flex items-center justify-center w-12 h-12 text-2xl transition duration-300 rounded-full hover:brightness-110 hover:opacity-90"
            @click="blogSwiper?.slidePrev()">
            ‹
          </button>
          <button :class="blogIndex === blogs.length - 1
              ? 'bg-secondary text-black'
              : 'bg-primary text-white'
            "
            class="flex items-center justify-center w-12 h-12 text-2xl transition duration-300 rounded-full hover:brightness-110 hover:opacity-90"
            @click="blogSwiper?.slideNext()">
            ›
          </button>
        </div>
      </div>

      <div class="relative z-10 md:w-7/12">
        <Swiper ref="swiperRef" :modules="[Autoplay, Navigation]" :slides-per-view="1" :space-between="12" :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }" :navigation="{
            nextEl: '.custom-swiper-next',
            prevEl: '.custom-swiper-prev',
          }" :breakpoints="{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }" class="pt-4" @swiper="onSwiperInit" @slide-change="onSlideChange">
          <SwiperSlide v-for="(blog, i) in blogs" :key="i" class="pb-1 pr-4">
            <div class="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.01] bg-white">
              <NuxtImg :src="blog.image" :alt="blog.title" width="600" height="300"
                class="w-full h-[300px] object-cover rounded-2xl" />
              <div class="p-4">
                <h3 class="text-lg font-semibold leading-tight text-gray-900">
                  {{ blog.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-500">{{ blog.date }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogs = [
  {
    title: "Kullan At Ürünler Ne Kadar Hijyenik?",
    date: "17 Haziran 2025",
    image: "/images/blog-1.png",
  },
  {
    title: "Çocuklar İçin Güvenli Etkinlik Alanları",
    date: "10 Haziran 2025",
    image: "/images/blog-2.png",
  },
  {
    title: "Sınıf Hijyeninde Yeni Trendler",
    date: "3 Haziran 2025",
    image: "/images/blog-1.png",
  },
];

const swiperRef = ref(null);
const blogSwiper = ref(null);
const blogIndex = ref(0);

function onSwiperInit(swiper) {
  blogSwiper.value = swiper;
  blogIndex.value = swiper.realIndex;
}

function onSlideChange(swiper) {
  blogIndex.value = swiper.realIndex;
}
</script>

<style scoped>
.swiper {
  padding-top: 1rem;
}
</style>
