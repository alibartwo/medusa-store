<template>
  <section class="relative">
    <!-- Background Image -->
    <NuxtImg src="/images/why-choose-us.png" alt="Onbaby neden" width="1920" height="700"
      class="w-full h-[700px] object-cover" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50" />

    <!-- Content -->
    <div class="absolute inset-0">
      <!-- Top Left Heading -->
      <div class="absolute top-0 left-0 w-full px-4 pt-24 text-white">
        <div class="max-w-screen-xl mx-auto">
          <!-- Upper Label -->
          <p class="text-sm tracking-widest uppercase text-white/80">
            NEDEN ONBABY?
          </p>

          <!-- Main Heading -->
          <h2 class="mt-2 text-3xl font-bold leading-tight md:text-5xl">
            Aktivite örtüsünden fazlası: <br />
            Hijyenik, pratik, zahmetsiz.
          </h2>
        </div>
      </div>

      <!-- Bottom Right Subtext and Buttons -->
      <div class="absolute bottom-0 right-0 w-full px-4 pb-16">
        <div class="flex justify-end max-w-screen-xl mx-auto">
          <div class="text-right text-white">
            <p class="max-w-md mb-4 text-sm text-white/80">
              Su geçirmez, kaymaz yapısıyla BabyON örtüleri hem oyun hem yemek
              aktiviteleri için ideal!
            </p>

            <div class="flex flex-wrap justify-end gap-4">
              <BaseButton type="primary" label="Siz de Deneyin" icon="uil:arrow-right" iconSize="20" to="/urun" />
              <BaseButton type="white" label="Hakkımızda" to="/hakkimizda"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
