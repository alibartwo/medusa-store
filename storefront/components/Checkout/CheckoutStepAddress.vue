<template>
  <form @submit.prevent="submit" @keydown.enter.prevent="submit" class="space-y-4" novalidate>
    <h2 class="text-lg font-semibold">Teslimat Bilgileri</h2>
    <div>
      <BaseInput v-model="address.first_name" placeholder="Ad" :error="errors.first_name" />
    </div>
    <div>
      <BaseInput v-model="address.last_name" placeholder="Soyad" :error="errors.last_name" />
    </div>
    <div>
      <BaseInput v-model="address.address_1" placeholder="Adres" :error="errors.address_1" />
    </div>
    <div>
      <BaseInput v-model="address.postal_code" placeholder="Posta Kodu" :error="errors.postal_code" />
    </div>
    <div>
      <BaseInput v-model="address.city" placeholder="Şehir" :error="errors.city" />
    </div>
    <div>
      <BaseInput :model-value="'Türkiye'" placeholder="Ülke" disabled />
    </div>
    <div>
      <BaseInput v-model="address.phone" placeholder="Telefon" :error="errors.phone" />
    </div>

    <div class="flex justify-between mt-6">
      <BaseButton type="secondary" label="Geri" html-type="button" @click="$emit('back')" />
      <BaseButton type="primary" label="Devam Et" html-type="submit" />
    </div>
    <div v-if="hasErrors" class="space-y-1 text-red-500 text-sm mt-4">
      <div v-for="[key, msg] in Object.entries(errors)" :key="key">
        {{ msg }}
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useMedusaClient } from '~/composables/useMedusaClient'
import { useCheckoutStore } from '~/stores/checkout'
import * as yup from 'yup'

const emit = defineEmits(['next', 'back', 'set-address'])

const cartStore = useCartStore()
const sdk = useMedusaClient()

const checkoutStore = useCheckoutStore()
const address = computed({
  get: () => checkoutStore.address,
  set: (val) => checkoutStore.address = val,
})

const errors = reactive<Record<string, string>>({})

const hasErrors = computed(() => Object.keys(errors).length > 0)

const schema = yup.object({
  first_name: yup.string().required('Ad zorunludur'),
  last_name: yup.string().required('Soyad zorunludur'),
  address_1: yup.string().required('Adres zorunludur'),
  postal_code: yup
    .string()
    .required('Posta kodu zorunludur')
    .matches(/^\d+$/, 'Sadece rakam giriniz')
    .min(4, 'En az 4 karakter')
    .max(10, 'En fazla 10 karakter'),
  city: yup.string().required('Şehir zorunludur'),
  phone: yup
    .string()
    .required('Telefon zorunludur')
    .matches(/^\d+$/, 'Geçerli bir telefon numarası giriniz')
    .min(7, 'En az 7 haneli olmalı')
    .max(15, 'En fazla 15 haneli olmalı'),
})

async function submit() {
  try {
    await schema.validate(address.value, { abortEarly: false })
    Object.keys(errors).forEach(key => delete errors[key])

    if (!cartStore.cart?.id) return

    address.value.country_code = 'tr'

    const { cart } = await sdk.store.cart.update(cartStore.cart.id, {
      shipping_address: address.value,
      billing_address: address.value,
    })

    cartStore.cart = cart
    emit('set-address', address.value)
    emit('next')
  } catch (err: any) {
    if (err.inner) {
      Object.keys(errors).forEach(key => delete errors[key])
      err.inner.forEach((e: any) => {
        errors[e.path] = e.message
      })
    }
  }
}
</script>