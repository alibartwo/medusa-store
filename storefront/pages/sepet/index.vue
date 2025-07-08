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
                                {{ item.title || item.variant_title }}
                            </h3>
                            <p class="mt-1 text-sm text-gray-700">Varyant: {{ item.variant?.title }}</p>
                            <div class="mt-2 flex items-center gap-2 text-sm">
                                <button @click="updateQuantity(item.id, item.quantity - 1)"
                                    class="px-2 py-1 border rounded">
                                    -
                                </button>
                                <span>Adet: {{ item.quantity }}</span>
                                <button @click="updateQuantity(item.id, item.quantity + 1)"
                                    class="px-2 py-1 border rounded">
                                    +
                                </button>
                            </div>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <p class="text-sm font-medium">₺{{ (item.unit_price).toFixed(2) }}</p>
                            <p class="text-sm font-semibold">Toplam: ₺{{ ((item.unit_price * item.quantity)).toFixed(2)
                            }}</p>
                            <button @click="cartStore.removeItem(item.id)" class="text-red-500 hover:text-red-700">
                                <Icon name="mdi:trash-can-outline" size="20" />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="mt-10 pt-6 text-right space-y-2">
                <p class="text-lg font-semibold">
                    Ara Toplam: ₺{{ cartSubtotal.toFixed(2) }}
                </p>
                <div class="flex justify-end space-x-4">
                    <BaseButton label="Sepeti Temizle" type="secondary" @click="cartStore.clearCart()" />
                    <BaseButton label="Alışverişe Devam Et" type="primary" to="/" />
                    <BaseButton label="Ödeme Adımına Geç" type="primary" to="/odeme" />
                </div>
            </div>
        </div>

        <div v-else class="text-center text-gray-600">
            <NuxtImg src="/images/empty-cart.svg" alt="Boş sepet" width="180" class="mx-auto mb-4" />
            <p>Sepetinizde ürün bulunmuyor.</p>
            <div class="mt-4 flex justify-center">
                <BaseButton label="Alışverişe Başla" type="primary" to="/urun" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const cart = computed(() => cartStore.cart);
const items = computed(() => cart.value?.items ?? []);

const cartSubtotal = computed(() => {
    return items.value.reduce((acc, item) => acc + (item.unit_price * item.quantity), 0);
});

const updateQuantity = async (itemId: string, quantity: number) => {
    if (quantity < 1) {
        await cartStore.removeItem(itemId);
    } else {
        await cartStore.updateItem(itemId, quantity);
    }
};

onMounted(async () => {
    const stored = localStorage.getItem("cart_id");
    if (stored) {
        await cartStore.initCart();
    }
});
</script>