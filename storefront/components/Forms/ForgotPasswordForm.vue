<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 w-full max-w-md">
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        E-posta adresiniz
      </label>
      <input
        id="email"
        v-model="email"
        type="email"
        class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        required
      />
    </div>
    <BaseButton
      label="Şifre Sıfırlama Bağlantısı Gönder"
      type="primary"
      class="w-full justify-center"
    />
    <p v-if="success" class="text-sm text-green-600 mt-2 text-center">
      E-posta gönderildi! Gelen kutunuzu kontrol edin.
    </p>
  </form>
</template>

<script setup lang="ts">
const email = ref("");
const success = ref(false);

function handleSubmit() {
  success.value = true;
}
</script>
