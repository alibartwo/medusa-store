<template>
  <NuxtLayout />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore();
onMounted(() => {
  cartStore.initCart();
});
</script>