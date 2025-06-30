<template>
  <div>
    <h2>Region ve Product Test.vue</h2>
    <p>📍 Region Loaded: {{ isLoaded }}</p>
    <pre>{{ region }}</pre>

    <hr />

    <p>📦 Products length: {{ products.length }}</p>
    <div v-if="products.length">
      <h3>İlk Ürün:</h3>
      <pre>{{ products[0] }}</pre>

      <h4>İlk Varyant:</h4>
      <pre>{{ products[0].variants?.[0] }}</pre>

      <h5>Fiyat:</h5>
      <p v-if="products[0].variants?.[0]?.calculated_price">
        Vergi Dahil: {{ products[0].variants[0].calculated_price.calculated_amount_with_tax }}
      </p>
      <p v-else>Calculated_price gelmedi.</p>
    </div>
    <CartModal />
  </div>

</template>

<script setup lang="ts">
import { useRegion } from '~/composables/useRegion'
import { useProductStore } from '~/stores/products'

const { region, isLoaded } = useRegion()
const productStore = useProductStore()

await watch(
  isLoaded,
  async (loaded) => {
    if (loaded) {
      await productStore.fetchProduct()
    }
  },
  { immediate: true }
)

const products = computed(() => productStore.products)
</script>