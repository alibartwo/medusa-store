<template>
  <section v-if="product" class="max-w-7xl mx-auto px-4 py-12 lg:flex lg:gap-10 min-h-screen">
    <!-- Gallery -->
    <div class="w-full lg:w-1/2 space-y-4 overflow-y-auto max-h-[calc(100vh-120px)] pr-2">
      <div v-for="(img, index) in product?.images" :key="index"
        class="rounded-xl aspect-square flex items-center justify-center overflow-hidden">
        <img :src="img.url" :alt="product.title" class="object-contain max-h-full max-w-full" />
      </div>
    </div>

    <!-- Infos -->
    <div class="w-full lg:w-1/2">
      <h1 class="text-2xl font-bold mb-2">{{ product?.title }}</h1>
      <p class="text-sm text-gray-500 mb-4">{{ product?.subtitle }}</p>

      <div v-if="selectedVariant?.calculated_price || product?.variants?.[0]?.calculated_price" class="mb-4">
        <span class="text-2xl font-semibold text-purple-700">
          ₺{{
            (
              selectedVariant?.calculated_price?.calculated_amount ??
              product?.variants?.[0]?.calculated_price?.calculated_amount
            ).toFixed(2)
          }}
        </span>
      </div>

      <p class="mb-6 text-gray-600 whitespace-pre-line">
        {{ product?.description }}
      </p>

      <!-- Variants -->
      <div v-if="product?.options?.length" class="mb-6">
        <label class="block text-sm font-medium mb-1">{{ product.options[0].title }}</label>
        <div class="flex flex-wrap gap-2">
          <button v-for="option in product.options[0].values" :key="option.id" :class="[
            'px-4 py-2 border rounded-md text-sm',
            selectedOption?.id === option.id
              ? 'bg-primary text-white border-purple-700'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          ]" @click="selectVariant(option.id)">
            {{ option.value }}
          </button>
        </div>
      </div>

      <!-- Quantity -->
      <div class="flex items-center gap-3 mb-6">
        <button class="border px-3 py-1 rounded" @click="quantity = Math.max(1, quantity - 1)">-</button>
        <span>{{ quantity }}</span>
        <button class="border px-3 py-1 rounded" @click="quantity++">+</button>
      </div>

      <!-- Add to Cart -->
      <BaseButton label="Sepete Ekle" type="primary" class="w-full mb-6 justify-center" :disabled="!selectedVariant"
        @click="addToCart" />

      <!-- Details -->
      <div>
        <div v-for="(item, index) in detailItems" :key="index" class="py-6 border-b border-gray-200 last:border-none">
          <button class="flex justify-between items-start w-full text-left"
            @click="openDetail = openDetail === index ? null : index">
            <div class="flex gap-4">
              <span class="text-primary font-semibold">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <h3 class="font-semibold text-gray-900 leading-snug">
                {{ item.title }}
              </h3>
            </div>
            <Icon :name="openDetail === index ? 'mdi:close' : 'mdi:plus'"
              class="w-5 h-5 text-primary shrink-0 mt-1 transition-transform duration-200" />
          </button>

          <Transition name="fade">
            <div v-show="openDetail === index" class="pl-10 pr-2 mt-3 text-sm text-gray-600 leading-relaxed">
              {{ item.content }}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/products'
import { useRegion } from '~/composables/useRegion'
import type { HttpTypes } from "@medusajs/types"
import { useCartStore } from '~/stores/cart'

const productStore = useProductStore()
const { isLoaded } = useRegion()
const product = ref()
const selectedVariant = ref<HttpTypes.StoreProductVariant | null>(null)
const quantity = ref(1)
const selectedOption = ref<{ id: string; value: string } | null>(null)
const openDetail = ref<number | null>(null)

const cartStore = useCartStore()

const addToCart = async () => {
  if (!selectedVariant.value) return
  try {
    await cartStore.addItem(selectedVariant.value.id, quantity.value)
    console.log('Ürün sepete eklendi')
  } catch (err) {
    console.error('Sepete eklerken hata:', err)
  }
}

const detailItems: { title: string; content: string }[] = [
  {
    title: 'Kullanım Bilgisi',
    content: 'Tek kullanımlık rulo örtüler hijyenik koşullarda üretilmiştir.'
  },
  {
    title: 'Kargo',
    content: 'Ücretsiz kargo, 24 saat içinde kargoya verilir.'
  },
  {
    title: 'İade',
    content: '14 gün koşulsuz iade hakkı.'
  }
]

watch(isLoaded, async (loaded) => {
  if (!loaded) return
  await productStore.fetchProduct()
  product.value = productStore.products[0]

  const firstVariant = product.value?.variants?.[0]
  selectedVariant.value = firstVariant || null

  const firstOption = firstVariant?.options?.[0]
  if (firstOption) {
    const matchingOpt = product.value?.options?.[0].values.find(
      (o: HttpTypes.StoreProductOptionValue) => o.value === firstOption.value
    )
    selectedOption.value = matchingOpt || null
  }
}, { immediate: true })

const selectVariant = (optionId: string) => {
  const selectedOpt = product.value?.options?.[0].values.find((o: HttpTypes.StoreProductOptionValue) => o.id === optionId)
  if (!selectedOpt) return

  selectedOption.value = selectedOpt
  selectedVariant.value = product.value?.variants.find((variant: HttpTypes.StoreProductVariant) =>
    variant.options?.some(
      (opt: HttpTypes.StoreProductOptionValue) =>
        opt.option_id === product.value?.options?.[0].id && opt.value === selectedOpt.value
    )
  ) || null
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>