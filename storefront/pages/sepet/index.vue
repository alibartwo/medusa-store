<template>
    <div class="min-h-screen p-6 max-w-5xl mx-auto space-y-8">
        <div v-if="items.length > 0">
            <h1 class="text-2xl font-bold mb-4 text-primary">Sepetiniz</h1>
            <ul class="space-y-4">
                <li v-for="item in items" :key="item.id"
                    class="group flex gap-6 p-4 rounded-2xl bg-secondary hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
                    <div class="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl bg-white">
                        <NuxtImg :src="item.thumbnail" :alt="item.title" width="128" height="128"
                            class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            loading="lazy" />
                    </div>
                    <div class="flex flex-col justify-between flex-1">
                        <div>
                            <h3 class="text-lg font-semibold text-primary group-hover:text-primary/80 line-clamp-2">
                                {{ item.variant_title }}
                            </h3>
                            <p class="mt-1 text-sm text-gray-700">Adet: {{ item.quantity }}</p>
                        </div>
                        <p class="text-sm font-medium mt-2">₺{{ (item.unit_price).toFixed(2) }}</p>
                    </div>
                </li>
            </ul>
            <div class="flex justify-end mt-6">
                <BaseButton label="Ödeme Adımına Geç" type="primary" to="/odeme" />
            </div>
        </div>
        <div v-else>
            <p class="text-center text-gray-600">Sepetinizde ürün bulunmuyor.</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const cart = computed(() => cartStore.cart);
const items = computed(() => cart.value?.items ?? []);

onMounted(async () => {
    const interval = setInterval(() => {
        const stored = localStorage.getItem("cart_id");
        if (stored) {
            clearInterval(interval);
            cartStore.initCart();
        }
    }, 100);
});
</script>