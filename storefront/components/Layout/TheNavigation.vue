<template>
  <div class="md:hidden px-6 pb-4">
    <nav class="flex flex-col gap-2 text-sm font-semibold text-gray-700 border-t pt-4">
      <NuxtLink to="/" @click="$emit('close')">Anasayfa</NuxtLink>
      <NuxtLink to="/urun" @click="$emit('close')">Ürünler</NuxtLink>
      <NuxtLink to="/hakkimizda" @click="$emit('close')">Hakkımızda</NuxtLink>
      <NuxtLink to="/iletisim" @click="$emit('close')">İletişim</NuxtLink>
    </nav>
    <div class="flex flex-col gap-2 mt-4">
      <NuxtLink to="/auth/giris"
        class="w-full text-center px-5 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-all"
        @click="emit('close')">
        Kullanıcı Girişi
      </NuxtLink>
      <NuxtLink to="/sepet"
        class="w-full text-center px-5 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all"
        @click="emit('close')">
        <Icon name="uil:shopping-cart" class="inline-block w-5 h-5 mr-1" />
        Sepetim<span v-if="cartCount > 0"> ({{ cartCount }})</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'
const emit = defineEmits(['close'])

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cart?.items?.length ?? 0)
</script>
