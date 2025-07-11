<template>
    <div class="space-y-4">
        <h2 class="text-lg font-semibold">Ödeme Yöntemi</h2>

        <div class="space-y-2">
            <label v-for="provider in paymentProviders" :key="provider.id"
                class="flex items-center gap-3 border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                <input v-model="selected" type="radio" name="payment" :value="provider.id"
                    class="form-radio text-primary" />
                <div>
                    <div class="font-medium">{{ provider.label }}</div>
                    <div class="text-sm text-gray-500">{{ provider.description }}</div>
                </div>
            </label>
        </div>

        <div v-if="selected === 'paytr' && iframeHtml" class="mt-4 border p-4 rounded-lg">
            <div v-html="iframeHtml"></div>
        </div>
    </div>

    <div class="flex justify-between mt-6">
        <BaseButton type="secondary" label="Geri" @click="$emit('back')" />
        <BaseButton type="primary" label="Siparişi Tamamla" @click="onCompleteCart" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useCartStore } from "~/stores/cart";
import { useMedusaClient } from "~/composables/useMedusaClient";

const sdk = useMedusaClient();
const cartStore = useCartStore();
const selected = ref("system");
const paymentProviders = ref<{ id: string; label: string; description: string }[]>([]);
const iframeHtml = ref("");

const initiatePayment = async () => {
    if (!cartStore.cart || !selected.value) return;

    await sdk.store.payment.initiatePaymentSession(cartStore.cart, {
        provider_id: selected.value,
    });

    const { cart } = await sdk.store.cart.retrieve(cartStore.cart.id);
    cartStore.cart = cart;

    const sessionList = cart.payment_collection?.payment_sessions || [];
    const session = sessionList.find((s) => s.provider_id === "paytr");
    const data = session?.data as { html?: string };

    if (data?.html) {
        iframeHtml.value = data.html;
    } else {
        iframeHtml.value = "";
    }

};

watch(selected, () => {
    initiatePayment();
});

// Additional logic for completing the cart
const emit = defineEmits(["next", "back"]);

onMounted(async () => {
    if (!cartStore.cart?.id) return

    const regionId = cartStore.cart?.region_id
    if (!regionId) return;

    try {
        const { payment_providers: paymentProvidersFromApi } = await sdk.store.payment.listPaymentProviders({
            region_id: regionId
        })
        paymentProviders.value = paymentProvidersFromApi.map((p: { id: string }) => ({
            id: p.id,
            label: p.id.toUpperCase(),
            description: ''
        }))
    } catch (err) {
        console.error('Ödeme sağlayıcıları alınamadı:', err)
    }
})

const onCompleteCart = async () => {
    if (!cartStore.cart?.id) return;

    const result = await sdk.store.cart.complete(cartStore.cart.id);

    if (result.type === "order" && result.order) {
        localStorage.setItem("order_id", result.order.id);
        localStorage.removeItem("cart_id");
        cartStore.cart = null;
        emit("next");
    } else {
        console.error(result);
    }
};
</script>