<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-screen-md mx-auto">
      <!-- Form -->
      <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit.prevent="handleSubmit">
        <!-- Name -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">İsim</label>
          <input type="text" placeholder="Deniz Yılmaz"
            class="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Soyisim</label>
          <input type="email" placeholder="e-posta@adresiniz.com"
            class="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Telefon</label>
          <input type="text" placeholder="+90 123 456 7890"
            class="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <!-- Company -->
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Şirket</label>
          <input type="text" placeholder="Yılmaz Gıda Sanayi"
            class="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <!-- Message (full width) -->
        <div class="md:col-span-2">
          <label class="block text-sm font-semibold text-gray-700 mb-1">Bize mesaj bırakın</label>
          <textarea rows="5" placeholder="Merhaba, ..."
            class="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-4 outline-none focus:ring-2 focus:ring-primary resize-none" />
        </div>

        <!-- Submit & Socials -->
        <div class="md:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-4">
          <BaseButton type="primary" label="Gönderin →" class="w-full sm:w-auto justify-center" @click="handleSubmit" />

          <!-- Social icons -->
          <div class="flex gap-3">
            <a href="#"
              class="w-9 h-9 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-md text-primary">
              <Icon name="ri:facebook-fill" class="w-5 h-5" />
            </a>
            <a href="#"
              class="w-9 h-9 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-md text-primary">
              <Icon name="ri:twitter-fill" class="w-5 h-5" />
            </a>
            <a href="#"
              class="w-9 h-9 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-md text-primary">
              <Icon name="ri:instagram-fill" class="w-5 h-5" />
            </a>
            <a href="#"
              class="w-9 h-9 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-md text-primary">
              <Icon name="ri:linkedin-fill" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '~/components/Base/BaseButton.vue'

const handleSubmit = () => {
  console.log('Form gönderildi')
}
</script>
