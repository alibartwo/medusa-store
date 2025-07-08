<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold">E-posta Adresi</h2>
    <BaseInput v-model="email" type="email" placeholder="e-posta@adresiniz.com" :error="emailError" />
    <div v-if="emailError" class="text-sm text-red-500">{{ emailError }}</div>
    <BaseButton type="primary" label="Devam Et" @click="submit" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useMedusaClient } from '~/composables/useMedusaClient'

const emit = defineEmits(['next', 'set-email'])
const email = ref('')
const emailError = ref('')
const sdk = useMedusaClient()
const cartStore = useCartStore()

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function submit() {
  if (!email.value) {
    emailError.value = 'E-posta adresi gereklidir.'
    return
  }

  if (!isValidEmail(email.value)) {
    emailError.value = 'Geçerli bir e-posta adresi girin.'
    return
  }

  if (!cartStore.cart?.id) return

  try {
    const { cart } = await sdk.store.cart.update(cartStore.cart.id, {
      email: email.value,
    })

    cartStore.cart = cart
    emailError.value = ''
    emit('set-email', email.value)
    emit('next')
  } catch (error) {
    console.error('E-posta güncellenemedi:', error)
    emailError.value = 'Bir hata oluştu, lütfen tekrar deneyin.'
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Enter') {
    submit()
  }
}

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>