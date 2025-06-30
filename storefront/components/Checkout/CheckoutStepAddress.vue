<template>
  <div class="space-y-4">
    <h2 class="text-lg font-semibold">Teslimat Bilgileri</h2>
    <BaseInput v-model="address.first_name" placeholder="Ad" />
    <BaseInput v-model="address.last_name" placeholder="Soyad" />
    <BaseInput v-model="address.address_1" placeholder="Adres" />
    <BaseInput v-model="address.postal_code" placeholder="Posta Kodu" />
    <BaseInput v-model="address.city" placeholder="Şehir" />
    <BaseInput v-model="address.country_code" placeholder="Ülke Kodu" readonly />
    <BaseInput v-model="address.phone" placeholder="Telefon" />
    <div class="flex justify-between mt-6">
      <BaseButton type="secondary" label="Geri" @click="$emit('back')" />
      <BaseButton type="primary" label="Devam Et" @click="submit" />
    </div>
  </div>
</template>

<script setup lang="ts">

import { useCartStore } from '~/stores/cart'
import { useMedusaClient } from '~/composables/useMedusaClient'

const emit = defineEmits(['next', 'back', 'set-address'])

const cartStore = useCartStore()
const sdk = useMedusaClient()

const address = ref({
  first_name: '',
  last_name: '',
  address_1: '',
  postal_code: '',
  city: '',
  country_code: 'tr',
  phone: ''
})

async function submit() {
  if (!cartStore.cart?.id) return

  try {
    const { cart } = await sdk.store.cart.update(cartStore.cart.id, {
      shipping_address: address.value,
      billing_address: address.value,
    })

    cartStore.cart = cart
    emit('set-address', address.value)
    emit('next')
  } catch (error) {
    console.error('Adres güncellenemedi:', error)
  }
}
</script>