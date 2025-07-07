<template>
  <footer class="bg-[#f8f9fc] text-[#2c2f36] text-sm">
    <div class="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      <!-- Logo & Description -->
      <div class="md:col-span-6 space-y-4">
        <div class="flex flew-row gap-4">
          <img src="/images/onroll-paper-logo.svg" alt="Logo" class="h-14" />
          <img src="/images/babyon-logo.svg" alt="Logo" class="h-14" />
        </div>

        <p class="text-sm text-gray-600 max-w-sm leading-relaxed">
          Kalite ve güveni bir araya getirerek çocuklara özel çözümler
          sunuyoruz. Onbaby, her aşamada ailenizin yanında.
        </p>
        <div class="flex flex-wrap items-center gap-4 mt-6">
          <img src="/images/paytr.svg" alt="PayTR" class="h-7" />
          <img src="/images/mastercard.svg" alt="Mastercard" class="h-10" />
          <img src="/images/visa.svg" alt="Visa" class="h-10" />
        </div>
      </div>

      <!-- Menu Columns -->
      <div class="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <!-- Hesabım -->
        <div>
          <h4 class="font-semibold tracking-widest mb-4">HESABIM</h4>
          <ul class="space-y-2 text-gray-600">
            <li>
              <NuxtLink to="/auth/giris">Giriş Yap</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/auth/kayit">Kayıt Ol</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/auth/sifremi-unuttum">Şifremi Unuttum</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Siparişlerim</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kurumsal -->
        <div>
          <h4 class="font-semibold tracking-widest mb-4">KURUMSAL</h4>
          <ul class="space-y-2 text-gray-600">
            <li>
              <NuxtLink to="/hakkimizda">Hakkımızda</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/iletisim">İletişim</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/sss">SSS</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Müşteri Yorumları</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Bilgilendirme -->
        <div>
          <h4 class="font-semibold tracking-widest mb-4">BİLGİLENDİRME</h4>
          <ul class="space-y-2 text-gray-600">
            <li>
              <NuxtLink to="/">Mesafeli Satış Sözleşmesi</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Gizlilik ve Güvenlik</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">İptal ve İade Koşulları</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Kişisel Veriler Politikası</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="border-t border-primary/10 py-4 text-xs max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <p class="text-gray-500">
        © 2025 On Ofset Ambalaj. Tüm Hakları Saklıdır
      </p>
      <p class="text-gray-500 mt-2 md:mt-0 flex flex-row items-center">
        powered by 
        <a href="https://piwu.tr" target="_blank" class="text-primary underline">
          <img src="/images/piwu.svg" alt="piwu"class="h-8" />
        </a>
      </p>
      <div class="flex gap-4 mt-2 md:mt-0">
        <Icon name="uil:linkedin" class="text-primary text-[1.5rem]" />
        <Icon name="uil:facebook" class="text-primary text-[1.5rem]" />
        <Icon name="uil:dribbble" class="text-primary text-[1.5rem]" />
        <Icon name="uil:twitter" class="text-primary text-[1.5rem]" />
      </div>
    </div>
  </footer>
</template>
