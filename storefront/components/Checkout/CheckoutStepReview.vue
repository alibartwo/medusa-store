<template>
    <div class="space-y-6">
        <h2 class="text-xl font-semibold">Sipariş Özeti</h2>

        <div>
            <h3 class="font-medium mb-2">Ürünler</h3>
            <ul class="space-y-2">
                <li v-for="item in cart?.items" :key="item.id" class="flex justify-between">
                    <div>
                        {{ item.variant_title }} <span class="text-gray-500">x{{ item.quantity }}</span>
                    </div>
                    <div>{{ formatPrice(item.unit_price) }}</div>
                </li>
            </ul>
        </div>

        <div class="space-y-1">
            <div class="flex justify-between"><span>Ara Toplam:</span> <span>{{ formatPrice(cart?.subtotal || 0)
            }}</span></div>
            <div class="flex justify-between"><span>Kargo:</span> <span>{{ formatPrice(cart?.shipping_total || 0)
            }}</span></div>
            <div class="flex justify-between"><span>Vergi:</span> <span>{{ formatPrice(cart?.tax_total || 0) }}</span>
            </div>
            <div class="flex justify-between font-semibold"><span>Genel Toplam:</span> <span>{{ formatPrice(total)
                    }}</span></div>
        </div>
        <div class="flex justify-between mt-6">
            <BaseButton type="secondary" label="Geri" @click="$emit('back')" />
            <BaseButton type="primary" label="Ödeme Adımına Geç" @click="$emit('next')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { computed } from 'vue'
defineEmits(['next', 'back'])

const cartStore = useCartStore()
const cart = cartStore.cart

const total = computed(() => {
    return (cart?.subtotal || 0) + (cart?.shipping_total || 0) + (cart?.tax_total || 0)
})

function formatPrice(value: number) {
    return `₺${value.toFixed(2)}`
}
</script>