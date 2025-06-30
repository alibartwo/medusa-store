<template>
  <section class="max-w-2xl mx-auto py-12 space-y-6">
    <h1 class="text-2xl font-bold">Hesabım</h1>

    <div v-if="auth.customer" class="space-y-4">
      <p><strong>Ad:</strong> {{ auth.customer.first_name }} {{ auth.customer.last_name }}</p>
      <p><strong>E-posta:</strong> {{ auth.customer.email }}</p>
      <BaseButton @click="handleLogout" type="secondary" label="Çıkış Yap" />
    </div>

    <div v-else class="text-gray-500">Yükleniyor veya giriş yapılmamış...</div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

definePageMeta({ auth: true })

const auth = useAuthStore()
const router = useRouter()

onMounted(() => {
  if (!auth.customer && !auth.loading) {
    auth.loadCustomer()
  }
})

const handleLogout = async () => {
  await auth.logout()
  router.push('/') 
}
</script>