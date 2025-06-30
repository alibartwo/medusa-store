<template>
  <section class="bg-white pb-4 px-4">
    <div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Card 1: Üretim Tesisi -->
      <div class="bg-secondary text-primary rounded-2xl p-6 flex flex-col justify-center h-full min-h-[220px]">
        <div>
          <h3 class="text-3xl font-bold mb-1">5</h3>
          <p class="font-semibold mb-2">Üretim Tesisi</p>
          <p class="text-sm text-gray-700">
            Hijyen standartlarına uygun, yüksek kapasiteli üretim hattımızla tam
            otomasyon sistemiyle çalışıyoruz.
          </p>
        </div>
      </div>

      <!-- Card 2: Kadın çalışan görseli -->
      <NuxtImg src="/images/stats-1.png" alt="Kadın çalışan" width="400" height="400"
        class="w-full rounded-2xl object-cover h-full" />

      <!-- Card 3: Ülkeye İhracat -->
      <div class="bg-secondary text-primary rounded-2xl p-6 flex flex-col justify-center h-full min-h-[220px]">
        <div>
          <h3 class="text-3xl font-bold mb-1">10+</h3>
          <p class="font-semibold mb-2">Ülkeye İhracat</p>
          <p class="text-sm text-gray-700">
            Avrupa’dan Orta Doğu’ya kadar genişleyen bir müşteri ağıyla global
            ölçekte büyümeye devam ediyoruz.
          </p>
        </div>
      </div>

      <!-- Card 4: Liman görseli -->
      <NuxtImg src="/images/stats-2.png" alt="Konteyner limanı" width="400" height="400"
        class="w-full rounded-2xl object-cover h-full" />

      <!-- Card 6: Piknikte kadınlar görseli -->
      <NuxtImg src="/images/stats-3.png" alt="Piknikte kadınlar" width="400" height="400"
        class="w-full rounded-2xl object-cover h-full" />

      <!-- Card 5: Ürün Teslimatı -->
      <div class="bg-secondary text-primary rounded-2xl p-6 flex flex-col justify-center h-full min-h-[220px]">
        <div>
          <h3 class="text-3xl font-bold mb-1">100.000+</h3>
          <p class="font-semibold mb-2">Ürün Teslimatı</p>
          <p class="text-sm text-gray-700">
            Her ay binlerce ürünümüz güvenle ailelerin evlerine ulaşıyor.
          </p>
        </div>
      </div>

      <!-- Card 8: Depo üst görünüm -->
      <NuxtImg src="/images/stats-4.png" alt="Depo görüntüsü" width="400" height="400"
        class="w-full rounded-2xl object-cover h-full" />

      <!-- Card 7: Müşteri Memnuniyeti -->
      <div class="bg-secondary text-primary rounded-2xl p-6 flex flex-col justify-center h-full min-h-[220px]">
        <div>
          <h3 class="text-3xl font-bold mb-1">98%</h3>
          <p class="font-semibold mb-2">Müşteri Memnuniyeti</p>
          <p class="text-sm text-gray-700">
            Kullanıcı geri bildirimlerini önemsiyor, ürünlerimizi sürekli
            geliştiriyoruz.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
