<template>
  <section class="py-4 md:py-10 min-h-[500px]">
    <div class="grid items-center max-w-screen-xl grid-cols-12 gap-4 px-4 mx-auto md:gap-4">
      <!-- Left content -->
      <div class="flex flex-col justify-between h-full col-span-12 gap-1 p-4 md:col-span-4 bg-secondary rounded-3xl md:p-8">
        <!-- Badge -->
        <div class="flex items-center gap-3">
          <div class="flex -space-x-2">
            <NuxtImg src="/images/testimonials/avatar1.jpg" alt="avatar1" width="32" height="32"
              class="object-cover border border-gray-600 rounded-full" />

            <NuxtImg src="/images/testimonials/avatar2.jpg" alt="avatar2" width="32" height="32"
              class="object-cover border border-gray-600 rounded-full" />

            <NuxtImg src="/images/testimonials/avatar3.jpg" alt="avatar3" width="32" height="32"
              class="object-cover border border-gray-600 rounded-full" />
          </div>
          <p class="text-sm font-light text-primary">
            50.000+ etkinlikte tercih edildi.
          </p>
        </div>

        <!-- Heading, Button, Info group -->
        <div class="flex flex-col gap-4">
          <h1 class="text-xl font-semibold md:text-2xl text-primary">
            Yemek, etkinlik, oyun... <br />
            Leziz dağınıklıklara karşı <br />
            korumanız hazır
          </h1>

          <BaseButton to="/urun" type="primary" label="Ürünü İncele" icon="uil:arrow-right" iconSize="20" />

          <p class="text-xs text-gray-500">
            100×120cm Tek Kullanımlık Masa ve Aktivite Örtüsü
          </p>
        </div>
      </div>

      <!-- Right image -->
      <div class="h-full col-span-12 overflow-hidden md:col-span-8">
        <img src="/images/hero-img.png" alt="Hero Görsel" class="object-cover w-full h-full rounded-3xl" />
      </div>
    </div>
  </section>
</template>
