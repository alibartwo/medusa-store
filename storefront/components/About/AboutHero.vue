<template>
  <section class="relative">
    <!-- Background Image -->
    <NuxtImg
      src="/images/why-choose-us.png"
      alt="Onbaby aile pikniği"
      width="1920"
      height=auto
      class="w-full h-[700px] object-cover"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50" />

    <!-- Content -->
    <div class="absolute inset-0">
      <!-- Top Left Heading -->
      <div class="absolute top-0 left-0 w-full px-4 pt-24 text-white">
        <div class="max-w-screen-xl mx-auto">
          <!-- Upper Label -->
          <p class="text-sm uppercase tracking-widest text-white/80">
            HAKKIMIZDA
          </p>

          <!-- Main Heading -->
          <h1 class="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Aktivite örtüsünden fazlası: <br />
            Hijyenik, pratik, zahmetsiz.
          </h1>
        </div>
      </div>

      <!-- Bottom Right Description -->
      <div class="absolute bottom-0 right-0 w-full px-4 pb-16">
        <div class="max-w-screen-xl mx-auto flex justify-end">
          <p class="text-sm text-white/80 max-w-md text-right">
            Su geçirmez, kaymaz yapısıyla BabyON örtüleri hem oyun <br />
            hem yemek aktiviteleri için ideal.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
