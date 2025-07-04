// stores/cart.ts
import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useMedusaClient } from "~/composables/useMedusaClient";
import { useRegion } from "~/composables/useRegion";
import type { HttpTypes } from "@medusajs/types";

export const useCartStore = defineStore("cart", () => {
  const sdk = useMedusaClient();
  const { region, isLoaded } = useRegion();

  const cart = ref<HttpTypes.StoreCart | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const initCart = async () => {
    if (!isLoaded.value || !region.value) return;

    const stored = localStorage.getItem("cart_id");
    loading.value = true;
    error.value = null;

    try {
      if (stored) {
        const { cart: c } = await sdk.store.cart.retrieve(stored);
        cart.value = c;
      } else {
        const { cart: c } = await sdk.store.cart.create({
          region_id: region.value.id,
        });
        localStorage.setItem("cart_id", c.id);
        cart.value = c;
      }
    } catch (e) {
      console.error(e);
      error.value = "Sepet oluşturulamadı";
    } finally {
      loading.value = false;
    }
  };

  const addItem = async (variant_id: string, quantity: number) => {
    if (!cart.value?.id) {
      await initCart();
    }
    if (!cart.value?.id) {
      throw new Error("Sepet mevcut değil.");
    }

    loading.value = true;
    try {
      const { cart: updated } = await sdk.store.cart.createLineItem(
        cart.value.id,
        { variant_id, quantity },
      );
      cart.value = updated;
    } catch (e) {
      console.error(e);
      error.value = "Ürün sepete eklenemedi";
    } finally {
      loading.value = false;
    }
  };

  const updateItem = async (line_item_id: string, quantity: number) => {
    if (!cart.value?.id) throw new Error("Sepet mevcut değil.");

    loading.value = true;
    try {
      const { cart: updated } = await sdk.store.cart.updateLineItem(
        cart.value.id,
        line_item_id,
        { quantity },
      );
      cart.value = updated;
    } catch (e) {
      console.error(e);
      error.value = "Adet güncellenemedi";
    } finally {
      loading.value = false;
    }
  };

  const removeItem = async (line_item_id: string) => {
    if (!cart.value?.id) throw new Error("Sepet mevcut değil.");

    loading.value = true;
    try {
      const res = await sdk.store.cart.deleteLineItem(
        cart.value.id,
        line_item_id,
      );
      const updated = res.parent;
      if (!updated) {
        throw new Error("Güncellenmiş sepet alınamadı");
      }
      cart.value = updated;
    } catch (e) {
      console.error(e);
      error.value = "Ürün sepetten silinemedi";
    } finally {
      loading.value = false;
    }
  };

  const setCart = (value: HttpTypes.StoreCart | null) => {
    cart.value = value;
  };

  // initialize cart when region is loaded or changed
  watch(
    [isLoaded, region],
    () => {
      if (isLoaded.value && region.value && !cart.value) {
        initCart();
      }
    },
    { immediate: true },
  );

  return {
    cart,
    loading,
    error,
    initCart,
    addItem,
    updateItem,
    removeItem,
    setCart,
  };
});
