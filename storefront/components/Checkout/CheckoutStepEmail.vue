<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold">E-posta Adresi</h2>
    <BaseInput v-model="email" type="email" placeholder="e-posta@adresiniz.com" :error="emailError" />
    <BaseButton type="primary" label="Devam Et" @click="submit" />
    <div v-if="emailError" class="text-sm text-red-500">{{ emailError }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useMedusaClient } from '~/composables/useMedusaClient'
import { useCheckoutStore } from '~/stores/checkout'

const emit = defineEmits(['next', 'set-email'])
const checkoutStore = useCheckoutStore()
const email = computed({
  get: () => checkoutStore.email,
  set: (val) => checkoutStore.email = val,
})
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
    emailError.value = 'Lütfen geçerli bir e-posta adresi girin.'
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
  } catch (error: any) {
    const msg = error?.response?.data?.message
    const isEmailTaken = msg?.includes('already exists')

    if (isEmailTaken) {
      // E-posta zaten kullanılıyor olsa bile ilerle
      console.warn('E-posta zaten kayıtlı: misafir olarak devam ediliyor.')
      emailError.value = ''
      emit('set-email', email.value)
      emit('next')
    } else {
      console.error('E-posta güncellenemedi:', error)
      emailError.value = 'Bir hata oluştu, lütfen tekrar deneyin.'
    }
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