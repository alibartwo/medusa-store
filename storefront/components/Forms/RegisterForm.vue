<template>
  <form class="w-full max-w-md space-y-4" @submit.prevent="handleRegister">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Ad</label>
      <input v-model="firstName" type="text"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Soyad</label>
      <input v-model="lastName" type="text"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
      <input v-model="email" type="email"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
      <input v-model="password" type="password"
        class="w-full bg-gray-100 text-gray-900 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-purple-700" />
    </div>

    <BaseButton type="primary" :label="auth.loading ? 'Kaydoluyor...' : 'Kaydol'" class="w-full justify-center"
      :disabled="auth.loading" />

    <p v-if="auth.error" class="text-sm text-red-500 text-center">{{ auth.error }}</p>
    <p v-if="auth.customer" class="text-sm text-green-600 text-center">
      Hoş geldin, {{ auth.customer.first_name }}!
    </p>

    <p class="text-center text-sm text-gray-500 mt-4">
      Zaten hesabınız var mı?
      <NuxtLink to="/auth/giris" class="text-purple-700">Giriş yap</NuxtLink>
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()
const auth = useAuthStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')

const handleRegister = async () => {
  const success = await auth.register({
    email: email.value,
    password: password.value,
    first_name: firstName.value,
    last_name: lastName.value,
  })

  if (success) {
    router.push('/hesabim')
  }
}
</script>