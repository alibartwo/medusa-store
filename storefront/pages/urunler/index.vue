<template>
  <div>
    <span v-if="loading">Loading...</span>
    <span v-else-if="products.length === 0">Ürün bulunamadı.</span>
    <ul v-else>
      <li v-for="product in products" :key="product.id">{{ product }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useMedusaClient } from "~/composables/useMedusaClient";
import type { HttpTypes } from "@medusajs/types";
const sdk = useMedusaClient();

const products = ref<HttpTypes.StoreProduct[]>([]);
const loading = ref(true);

const fetchProducts = async () => {
  try {
    const { products: fetchedProducts } = await sdk.store.product.list();
    products.value = fetchedProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});

</script>
