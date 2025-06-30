import { defineStore } from "pinia";
import { ref } from "vue";
import { useMedusaClient } from "~/composables/useMedusaClient";
import type { HttpTypes } from "@medusajs/types";
import { useRegion } from "~/composables/useRegion";

export const useProductStore = defineStore("product", () => {
  const sdk = useMedusaClient();
  const { region } = useRegion();

  const products = ref<HttpTypes.StoreProduct[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchProduct = async () => {
    if (!region.value || !region.value.countries?.length) {
      throw new Error("Region bilgisi mevcut değil.");
    }
    loading.value = true;
    error.value = null;

    try {
      const list = await sdk.store.product.list({
        region_id: region.value.id,
        country_code: region.value.countries[0].iso_2,
      });
      const firstProduct = list.products?.[0];
      if (!firstProduct) {
        throw new Error("Hiç ürün bulunamadı.");
      }

      const { product: p } = await sdk.store.product.retrieve(firstProduct.id, {
        fields: "*variants.calculated_price",
        region_id: region.value.id,
        country_code: region.value.countries[0].iso_2,
      });
      products.value = [p];
    } catch {
      error.value = "Ürün alınamadı";
    } finally {
      loading.value = false;
    }
  };

  return { products, loading, error, fetchProduct };
});
