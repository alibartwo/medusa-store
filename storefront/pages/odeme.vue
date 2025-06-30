<template>
    <section v-if="(cart && cart.items && cart.items.length > 0) || step === 6"
        class="max-w-screen-md h-225 mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-6">Ödeme</h1>

        <div class="space-y-6">
            <!-- Step Indicator -->
            <div class="flex items-center justify-between text-sm font-medium text-gray-500">
                <div :class="stepClass(1)">1. E-posta</div>
                <div :class="stepClass(2)">2. Adres</div>
                <div :class="stepClass(3)">3. Kargo</div>
                <div :class="stepClass(4)">4. Önizleme</div>
                <div :class="stepClass(5)">5. Ödeme</div>
                <div :class="stepClass(6)">6. Onay</div>

            </div>

            <!-- Step Content -->
            <div>
                <component :is="currentStepComponent" @next="nextStep" @back="prevStep" />
            </div>
        </div>
    </section>
    <section v-else-if="cart && cart.items && cart.items.length === 0"
        class="max-w-screen-md h-225 mx-auto px-4 py-8 text-center">
        <h1 class="text-2xl font-bold mb-4">Sepetiniz Boş</h1>
        <p class="text-gray-600">
            Sepetinizde ürün bulunmuyor. Alışverişe devam etmek için
            <NuxtLink to="/" class="text-primary underline">anasayfaya</NuxtLink> dönebilirsiniz.
        </p>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

// step index
const step = ref(1)

const nextStep = () => {
    if (step.value < 6) step.value++
}
const prevStep = () => {
    if (step.value > 1) step.value--
}

// dynamic import of step components
const currentStepComponent = computed(() => {
    switch (step.value) {
        case 1:
            return defineAsyncComponent(() => import('~/components/Checkout/CheckoutStepEmail.vue'))
        case 2:
            return defineAsyncComponent(() => import('~/components/Checkout/CheckoutStepAddress.vue'))
        case 3:
            return defineAsyncComponent(() => import('~/components/Checkout/CheckoutStepShipping.vue'))
        case 4:
            return defineAsyncComponent(() => import('~/components/Checkout/CheckoutStepReview.vue'))
        case 5:
            return defineAsyncComponent(() => import('~/components/Checkout/CheckoutStepPayment.vue'))
        case 6:
            return defineAsyncComponent(() => import('~/components/Checkout/CheckoutStepConfirmation.vue'))
        default:
            return null
    }
})

const stepClass = (i: number) =>
    i === step.value
        ? 'text-primary font-semibold'
        : 'opacity-50'
</script>