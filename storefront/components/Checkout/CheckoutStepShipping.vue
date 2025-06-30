<template>
  <div class="space-y-6">
    <h2 class="text-xl font-semibold text-gray-800">Teslimat Yöntemi</h2>

    <div class="space-y-4">
      <label v-for="option in shippingOptions" :key="option.id"
        class="flex items-center gap-4 p-4 border rounded-lg cursor-pointer hover:border-primary">
        <input v-model="selectedShippingOption" type="radio" :value="option.id" name="shipping"
          class="form-radio text-primary" />
        <div>
          <p class="font-medium text-gray-700">{{ option.name }}</p>
          <p class="text-sm text-gray-500">{{ option.amount }}</p>
        </div>
      </label>
    </div>
    <div class="flex justify-between mt-6">
      <BaseButton type="secondary" label="Geri" @click="$emit('back')" />
      <BaseButton type="primary" label="Devam Et" @click="submit" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart'
import { useMedusaClient } from '~/composables/useMedusaClient'
import { onMounted, ref } from 'vue'
import type { StoreCartShippingOption } from '@medusajs/types'

const emit = defineEmits(['next', 'back', 'set-shipping'])
const selectedShippingOption = ref('')

const sdk = useMedusaClient()
const cartStore = useCartStore()

const shippingOptions = ref<StoreCartShippingOption[]>([])


onMounted(async () => {
  if (!cartStore.cart?.id) return
  try {
    const { shipping_options } = await sdk.store.fulfillment.listCartOptions({
      cart_id: cartStore.cart.id
    })
    shippingOptions.value = shipping_options
  } catch (e) {
    console.error('Kargo seçenekleri alınamadı:', e)
  }
})

async function submit() {
  if (!cartStore.cart?.id || !selectedShippingOption.value) return

  try {
    const result = await sdk.store.cart.addShippingMethod(cartStore.cart.id, {
      option_id: selectedShippingOption.value,
      data: {}
    })
    console.log('Shipping method add result:', result)

    const { cart: updatedCart } = await sdk.store.cart.retrieve(cartStore.cart.id)
    console.log('Updated cart:', updatedCart)
    cartStore.cart = updatedCart
    emit('set-shipping', selectedShippingOption.value)
    emit('next')
  } catch (error) {
    console.error('Kargo yöntemi eklenemedi:', error)
  }
}
</script>