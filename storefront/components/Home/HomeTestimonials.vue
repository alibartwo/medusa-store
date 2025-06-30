<template>
  <section class="px-4 py-24">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="flex flex-col items-start justify-between mb-10 md:flex-row md:items-center"
      >
        <div>
          <h3
            class="text-sm font-semibold tracking-widest uppercase text-primary"
          >
            Kullanıcı Yorumları
          </h3>
          <h2 class="mt-2 text-3xl font-bold text-primary">
            Onbaby Kullananlar Ne Diyor?
          </h2>
          <p class="max-w-md mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius elementum tristique.
          </p>
        </div>
        <div class="mt-4 md:mt-0">
          <BaseButton
  label="Tüm Yorumları Gör →"
  type="primary"
/>
        </div>
      </div>

      <Swiper
        ref="testimonialSwiper"
        :modules="[Autoplay, Navigation]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :navigation="{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }"
        class="overflow-hidden rounded-xl"
        @swiper="onSwiperInit"
      >
        <SwiperSlide>
          <div
            class="flex flex-col items-stretch gap-0 overflow-hidden bg-secondary md:flex-row rounded-xl"
          >
            <div class="flex-1 p-10">
              <p class="text-xl font-semibold leading-relaxed text-gray-800">
                “ Etkinlik sırasında çocuklar özgürce boyama yapabiliyor, ben de
                temizlikle zaman kaybetmiyorum. Hijyen açısından da çok rahatım.
                Her sınıf için ideal! Çocukların yaratıcı yönlerini özgürce
                geliştirebildikleri, aynı zamanda bana da pratiklik sağlayan bu
                örtü sayesinde sınıf düzeni bozulmadan etkinlikleri
                tamamlayabiliyoruz. ”
              </p>
              <div
                class="flex items-center mt-4 space-x-2 text-lg text-yellow-500"
              >
                <span>★★★★★</span>
              </div>
              <div class="mt-2">
                <p class="font-bold text-gray-800">Merve T.</p>
                <p class="text-sm text-gray-500">İstanbul, Türkiye</p>
              </div>
            </div>
            <div class="flex-1">
              <NuxtImg
                src="/images/testimonials-1.png"
                alt="Müşteri yorumu"
                width="800"
                height="600"
                class="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="flex flex-col items-stretch gap-0 overflow-hidden bg-secondary md:flex-row rounded-3xl"
          >
            <div class="flex-1 p-10">
              <p class="text-xl font-semibold leading-relaxed text-gray-800">
                “ Temizlik derdi olmadan harika vakit geçirdik. Kullanımı çok
                kolay ve pratik. Çocuklar etkinlik boyunca rahat etti, ben de
                sonrasında temizlikle uğraşmadım. Bu tür ürünler sınıflar için
                büyük kolaylık sağlıyor. ”
              </p>
              <div
                class="flex items-center mt-4 space-x-2 text-lg text-yellow-500"
              >
                <span>★★★★★</span>
              </div>
              <div class="mt-2">
                <p class="font-bold text-gray-800">Ahmet Y.</p>
                <p class="text-sm text-gray-500">Ankara, Türkiye</p>
              </div>
            </div>
            <div class="flex-1">
              <NuxtImg
                src="/images/testimonials-1.png"
                alt="Müşteri yorumu"
                width="800"
                height="600"
                class="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            class="flex flex-col items-stretch gap-0 overflow-hidden bg-secondary md:flex-row rounded-3xl"
          >
            <div class="flex-1 p-10">
              <p class="text-xl font-semibold leading-relaxed text-gray-800">
                “ Her öğretmene tavsiye ederim. Güvenli ve pratik. Çocukların
                güvenliği için tasarlanmış olması ve kolay temizlenebilir yapısı
                sayesinde sınıf ortamında rahatlıkla kullanabiliyorum. Hem
                çocuklar hem ben çok memnunuz. ”
              </p>
              <div
                class="flex items-center mt-4 space-x-2 text-lg text-yellow-500"
              >
                <span>★★★★★</span>
              </div>
              <div class="mt-2">
                <p class="font-bold text-gray-800">Elif K.</p>
                <p class="text-sm text-gray-500">İzmir, Türkiye</p>
              </div>
            </div>
            <div class="flex-1">
              <NuxtImg
                src="/images/testimonials-1.png"
                alt="Müşteri yorumu"
                width="800"
                height="600"
                class="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Custom navigation buttons below Swiper -->
      <div class="flex justify-center gap-4 mt-6">
        <button
          :class="[
            activeIndex === 0
              ? 'bg-secondary text-black'
              : 'bg-primary text-white',
            'rounded-full',
            'hover:brightness-110 hover:opacity-90 transition duration-300',
          ]"
          class="flex items-center justify-center w-12 h-12 text-2xl custom-swiper-prev"
          @click="testimonialSwiper?.swiper?.slidePrev()"
        >
          ‹
        </button>
        <button
          :class="[
            activeIndex === 2
              ? 'bg-secondary text-black'
              : 'bg-primary text-white',
            'rounded-full',
            'hover:brightness-110 hover:opacity-90 transition duration-300',
          ]"
          class="flex items-center justify-center w-12 h-12 text-2xl custom-swiper-next"
          @click="testimonialSwiper?.swiper?.slideNext()"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialSwiper = ref(null);
const activeIndex = ref(0);

function onSwiperInit(swiperInstance) {
  testimonialSwiper.value = swiperInstance;
  swiperInstance.on("slideChange", () => {
    activeIndex.value = swiperInstance.realIndex;
  });
}
</script>
