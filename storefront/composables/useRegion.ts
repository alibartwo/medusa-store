import { ref, onMounted } from "vue";
import { useMedusaClient } from "~/composables/useMedusaClient";
import type { HttpTypes } from "@medusajs/types";

const region = ref<HttpTypes.StoreRegion | null>(null);
const isLoaded = ref(false);

export const useRegion = () => {
  const sdk = useMedusaClient();

  onMounted(async () => {
    const stored = localStorage.getItem("region_id");

    if (stored) {
      const { region: r } = await sdk.store.region.retrieve(stored);
      region.value = r;
    } else {
      const { regions } = await sdk.store.region.list();
      region.value = regions[0];
      localStorage.setItem("region_id", regions[0].id);
    }

    isLoaded.value = true;
  });

  return { region, isLoaded };
};
