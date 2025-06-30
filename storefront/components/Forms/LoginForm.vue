<template>
  <section class="w-full max-w-md mx-auto">
    <form @submit.prevent="handleLogin" class="space-y-4">
      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          E-posta
        </label>
        <input v-model="email" type="email"
          class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700" />
      </div>

      <!-- Password -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Şifre
        </label>
        <input v-model="password" type="password"
          class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700" />
        <div class="text-right mt-1">
          <NuxtLink to="/auth/sifremi-unuttum" class="text-xs text-gray-400 hover:underline">
            Şifrenizi mi unuttunuz?
          </NuxtLink>
        </div>
      </div>

      <!-- Submit Button -->
      <BaseButton type="primary" :label="auth.loading ? 'Giriş yapılıyor...' : 'Giriş Yap'"
        class="w-full justify-center" :disabled="auth.loading" @click="handleLogin" />

      <!-- Error Message -->
      <p v-if="auth.error" class="text-sm text-red-500 text-center">
        {{ auth.error }}
      </p>

      <!-- Success Message -->
      <p v-if="auth.customer" class="text-sm text-green-600 text-center">
        Hoş geldin, {{ auth.customer.first_name }}!
      </p>
    </form>

    <!-- Sign up link -->
    <p class="text-center text-sm text-gray-500 mt-6">
      Hesabınız yok mu?
      <NuxtLink to="/auth/kayit" class="text-purple-700 font-semibold hover:underline">
        Kayıt Ol
      </NuxtLink>
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const email = ref('')
const password = ref('')

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  const success = await auth.login(email.value, password.value)

  if (success) {
    router.push('/hesabim')
  }
}
</script>