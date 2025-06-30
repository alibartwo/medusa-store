<template>
  <BaseModal @close="$emit('close')">
    <template #title>Sepetiniz ({{ items.length }})</template>
    <div class="space-y-4">
      <div v-for="item in items" :key="item.id" class="flex justify-between items-start">
        <div>
          {{ item.variant_title }}<br />
          x{{ item.quantity }}
          <div class="text-sm text-gray-500">₺{{ (item.unit_price).toFixed(2) }}</div>
        </div>
        <button class="text-gray-400 hover:text-primary" @click="remove(item.id)">
          <Icon name="mdi:trash-can-outline" class="w-5 h-5" />
        </button>
      </div>
      <div class="font-semibold">
        Toplam: ₺{{ (total).toFixed(2) }}
      </div>
      <div class="flex justify-between flex-row">
        <BaseButton type="secondary" label="Sepete Git" to="/sepet" />
        <BaseButton type="primary" label="Ödemeye Geç" to="/odeme" />
      </div>

    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";

defineEmits(["close"]);

const cartStore = useCartStore();
const items = computed(() => cartStore.cart?.items ?? []);
const total = computed(() => cartStore.cart?.total ?? 0);

function remove(line_item_id: string) {
  cartStore.removeItem(line_item_id);
}
</script>