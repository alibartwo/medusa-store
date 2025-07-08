<template>
  <section class="bg-white pb-4 pt-16 px-4">
    <!-- Top Grid -->
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-4">
      <!-- Left Text Block -->
      <div
        class="bg-secondary text-primary rounded-2xl p-6 flex flex-col justify-center min-h-[320px]"
      >
        <p class="text-sm uppercase tracking-wide font-semibold mb-1">
          BİZ KİMİZ?
        </p>
        <h2 class="text-4xl md:text-4xl font-semibold decoration-primary">
          Hayatın Her Alanında BabyON
        </h2>
      </div>

      <!-- Right Image Block -->
      <div class="flex items-stretch">
        <NuxtImg
          src="/images/about-table.png"
          alt="Aile Pikniği"
          width="800"
          height="320"
          class="w-full h-full min-h-[320px] rounded-2xl object-cover"
        />
      </div>
    </div>

    <!-- Bottom Block -->
    <div class="relative mt-4 max-w-screen-xl mx-auto">
      <!-- Background Image -->
      <NuxtImg
        src="/images/about-warehouse.png"
        alt="Depoda çalışan kadın"
        width="1200"
        height="600"
        class="w-full rounded-2xl object-cover"
      />

      <!-- Floating Text Card -->
      <div
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-secondary rounded-2xl p-6 md:p-8 max-w-xl ml-6 shadow-lg"
      >
        <h3 class="text-xl md:text-2xl font-semibold text-primary mb-4">
          Güvenli, pratik ve hijyenik çözümlerle çocukların ve ebeveynlerin
          yanındayız.
        </h3>
        <p class="text-gray-700 text-sm leading-relaxed">
          BabyON, bebek bakımından eğitici aktivitelere kadar günlük yaşamın her
          alanında ebeveynlerin hayatını kolaylaştırmak için tasarlanmış
          yenilikçi ürünler sunar. Üretimde kalite ve hijyenden ödün vermeden,
          her detayda çocuk sağlığını ön planda tutan yaklaşımımızla bugün
          binlerce aileye dokunuyoruz.
        </p>
      </div>
    </div>
  </section>
</template>
