<template>
  <section class="bg-white pt-10 pb-20 px-4">
    <div
      class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <!-- WhatsApp -->
      <ContactInfoCard title="WhatsApp" icon="mdi:whatsapp">
        7/24 WhatsApp hattımız: <br />
        <strong>+90 555 555 55 55</strong>
      </ContactInfoCard>

      <!-- E-posta -->
      <ContactInfoCard title="E-posta" icon="mdi:email-outline">
        Bize e-posta gönderin: <br />
        <strong>info@onbaby.com</strong>
      </ContactInfoCard>

      <!-- Konum -->
      <ContactInfoCard title="Konum" icon="mdi:map-marker-outline">
        Üretim ve merkez ofisimize uğrayın: <br />
        <strong>İzmir, Türkiye</strong>
      </ContactInfoCard>

      <!-- Telefon -->
      <ContactInfoCard title="Telefon" icon="mdi:phone-outline">
        Hemen arayın, sorularınızı yanıtlayalım: <br />
        <strong>+90 232 000 00 00</strong>
      </ContactInfoCard>
    </div>
  </section>
</template>
