<template>
  <header class="sticky top-0 z-50 bg-white border-b border-gray-100">
    <div class="flex items-center justify-between max-w-screen-xl px-6 py-4 mx-auto">
      <!-- Logo and Navigation -->
      <div class="flex items-center gap-4 md:gap-8">
        <NuxtLink to="/" class="shrink-0">
          <img src="/images/logo.png" alt="Logo" class="h-10 md:h-12" />
        </NuxtLink>
        <div class="hidden w-px h-8 bg-gray-300 md:block opacity-30" />
        <nav class="items-center hidden gap-6 text-sm font-semibold text-gray-600 md:flex">
          <NuxtLink to="/" class="hover:text-primary">Anasayfa</NuxtLink>
          <NuxtLink to="/hakkimizda" class="hover:text-primary">Hakkımızda</NuxtLink>
          <NuxtLink to="/urun" class="hover:text-primary">Ürünler</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-primary">Blog</NuxtLink>
          <NuxtLink to="/iletisim" class="hover:text-primary">İletişim</NuxtLink>
        </nav>
      </div>

      <!-- Buttons -->
      <div class="items-center hidden gap-3 md:flex">
        <BaseButton v-if="!auth.customer" to="/auth/giris" label="Kullanıcı Girişi" type="secondary" />
        <BaseButton v-else to="/hesabim" type="secondary" :label="`Merhaba, ${auth.customer.first_name}`"
          icon="mdi:account-circle" />

        <!-- Cart -->
        <button class="relative" aria-label="Sepet" @click="toggleCartModal">
          <BaseButton type="primary" icon="uil:shopping-cart" no-label icon-size="20" />
          <span v-if="cartCount > 0"
            class="absolute -top-1 -right-1 bg-secondary text-primary text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ cartCount }}
          </span>
        </button>
      </div>

      <!-- Mobile Menü -->
      <button class="text-gray-600 md:hidden hover:text-primary" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <Icon name="mdi:menu" class="w-7 h-7" />
      </button>
    </div>

    <TheNavigation v-if="isMobileMenuOpen" @close="isMobileMenuOpen = false" />

    <!-- Sepet Modal -->
    <CartModal v-if="showCartModal" @close="toggleCartModal" />
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'
import TheNavigation from './TheNavigation.vue'
import CartModal from '~/components/Cart/CartModal.vue'

const auth = useAuthStore()
const cartStore = useCartStore()
const isMobileMenuOpen = ref(false)
const showCartModal = ref(false)

const cartCount = computed(() => cartStore.cart?.items?.length ?? 0)

function toggleCartModal() {
  console.log('toggleCartModal çalıştı') // DEBUG

  showCartModal.value = !showCartModal.value
}
</script>