<template>
    <div class="space-y-4">
        <h2 class="text-lg font-semibold">E-posta Adresi</h2>
        <BaseInput v-model="email" type="email" placeholder="e-posta@adresiniz.com" />
        <BaseButton type="primary" label="Devam Et" @click="submit" />
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useMedusaClient } from '~/composables/useMedusaClient'

const emit = defineEmits(['next', 'set-email'])
const email = ref('')
const sdk = useMedusaClient()
const cartStore = useCartStore()

async function submit() {
  if (!email.value || !cartStore.cart?.id) return

  try {
    const { cart } = await sdk.store.cart.update(cartStore.cart.id, {
      email: email.value,
    })

    cartStore.cart = cart
    emit('set-email', email.value)
    emit('next')
  } catch (error) {
    console.error('E-posta güncellenemedi:', error)
  }
}
</script>