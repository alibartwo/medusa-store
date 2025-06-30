<template>
  <section class="max-w-screen-xl mx-auto px-4 py-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Block 1 -->
      <div
        class="bg-secondary text-text p-8 rounded-3xl aspect-square flex flex-col items-start justify-center"
      >
        <h3 class="text-3xl font-semibold text-primary mb-2">
          Dış Mekan Piknik ve Etkinliklerde
        </h3>
        <p class="text-base">
          Parkta, bahçede ya da arkadaş ziyaretlerinde...<br />
          Onbaby örtünüzü serin, keyfinize bakın. Temizlik derdi olmadan günü
          sonlandırın.
        </p>
      </div>
      <NuxtImg
        src="/images/use-case-1.png"
        alt="Piknik kullanım"
        width="600"
        height="600"
        class="rounded-3xl w-full h-full object-cover"
      />

      <!-- Block 2 -->
      <NuxtImg
        src="/images/use-case-2.png"
        alt="Okul kullanım"
        width="600"
        height="600"
        class="rounded-3xl w-full h-full object-cover"
      />
      <div
        class="bg-secondary text-text p-8 rounded-3xl aspect-square flex flex-col items-start justify-center"
      >
        <h3 class="text-3xl font-semibold text-primary mb-2">
          Okullarda ve Atölyelerde
        </h3>
        <p class="text-base">
          Kreşler, anaokulları ve çocuk atölyeleri için ideal. Her çocuk için
          hijyenik bir alan yaratır.<br />
          Eğitmenler için kolay, çocuklar için güvenlidir.
        </p>
      </div>

      <!-- Block 3 -->
      <div
        class="bg-secondary text-text p-8 rounded-3xl aspect-square flex flex-col items-start justify-center"
      >
        <h3 class="text-3xl font-semibold text-primary mb-2">
          Diş Klinikleri ve Sağlık Merkezlerinde
        </h3>
        <p class="text-base">
          Diş muayenelerinde boyna geçirilen örtü olarak kullanılır.<br />
          Sıvı geçirmez yapısı ve kolay kesilebilirliği sayesinde medikal
          alanlarda da tercih ediliyor.
        </p>
      </div>
      <NuxtImg
        src="/images/use-case-3.png"
        alt="Sağlık kullanım"
        width="600"
        height="600"
        class="rounded-3xl w-full h-full object-cover"
      />
    </div>
  </section>
</template>
