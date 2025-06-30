<template>
    <div>
        <h2 class="text-xl font-semibold mb-4">Siparişiniz Alındı</h2>
        <div v-if="loading">Yükleniyor...</div>
        <div v-else-if="order">
            <p class="mb-2">Sipariş Numarası: {{ order.display_id }}</p>
            <p class="mb-2">Tarih: {{ new Date(order.created_at).toLocaleDateString() }}</p>
            <p class="mb-4">Email: {{ order.email }}</p>

            <h3 class="text-lg font-medium mt-6 mb-2">Ürünler</h3>
            <ul class="space-y-2 mb-6">
                <li v-for="item in order.items" :key="item.id" class="flex justify-between">
                    <div>
                        {{ item.title }} <span class="text-gray-500">x{{ item.quantity }}</span>
                    </div>
                    <div>{{ formatPrice(item.unit_price) }}</div>
                </li>
            </ul>

            <h3 class="text-lg font-medium mb-2">Toplamlar</h3>
            <ul class="space-y-1">
                <li class="flex justify-between">
                    <span>Ara Toplam:</span>
                    <span>{{ formatPrice(order.item_subtotal) }}</span>
                </li>
                <li class="flex justify-between">
                    <span>Kargo:</span>
                    <span>{{ formatPrice(order.shipping_total) }}</span>
                </li>
                <li class="flex justify-between">
                    <span>Vergi:</span>
                    <span>{{ formatPrice(order.tax_total) }}</span>
                </li>
                <li class="flex justify-between font-semibold">
                    <span>Genel Toplam:</span>
                    <span>{{ formatPrice(order.total) }}</span>
                </li>
            </ul>
            <div class="mt-12 flex justify-center">
                <BaseButton label="Ana Sayfaya Dön" type="primary" to="/"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMedusaClient } from '~/composables/useMedusaClient'
import type { HttpTypes } from '@medusajs/types'

const props = defineProps<{
    orderId?: string
}>()

const realOrderId = ref<string | null>(null)

const order = ref<HttpTypes.StoreOrder | null>(null)
const loading = ref(true)

const sdk = useMedusaClient()

function formatPrice(amount: number): string {
    if (!amount || isNaN(amount)) return "₺0,00";
    if (!order.value?.currency_code) return `${amount}`;
    return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: order.value.currency_code.toUpperCase(),
    }).format(amount);
}

onMounted(async () => {
    realOrderId.value = props.orderId || localStorage.getItem("order_id")
    if (!realOrderId.value) {
        console.error('orderId not found')
        loading.value = false
        return
    }

    try {
        const { order: o } = await sdk.store.order.retrieve(realOrderId.value)
        console.log('order data:', o)
        order.value = o
    } catch (e) {
        console.error('Sipariş getirilemedi', e)
    } finally {
        loading.value = false
    }
})

</script>