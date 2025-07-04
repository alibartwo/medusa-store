import { defineStore } from "pinia";
import { ref } from "vue";
import { useMedusaClient } from "~/composables/useMedusaClient";
import type { HttpTypes } from "@medusajs/types";
import getErrorMessage from "~/utils/getErrorMessage";

export const useAuthStore = defineStore("auth", () => {
  const sdk = useMedusaClient();

  const customer = ref<HttpTypes.StoreCustomer | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const addresses = ref<HttpTypes.StoreCustomerAddress[] | null>(null);

  const register = async ({
    email,
    password,
    first_name,
    last_name,
  }: {
    email: string;
    password: string;
    first_name?: string;
    last_name?: string;
  }): Promise<boolean> => {
    loading.value = true;
    error.value = null;

    try {
      await sdk.auth.register("customer", "emailpass", { email, password });

      const { customer: createdCustomer } = await sdk.store.customer.create({
        email,
        first_name,
        last_name,
      });

      customer.value = createdCustomer;
      return true;
    } catch (err) {
      const msg = getErrorMessage(err);
      if (msg.includes("already exists")) {
        try {
          const token = await sdk.auth.login("customer", "emailpass", {
            email,
            password,
          });

          if (typeof token === "string") {
            const { customer: c } = await sdk.store.customer.retrieve();
            customer.value = c;
            return true;
          } else {
            error.value = "Ek doğrulama gerekiyor";
            return false;
          }
        } catch (e) {
          error.value = getErrorMessage(e, "Giriş başarısız");
          return false;
        }
      } else {
        error.value = msg;
        return false;
      }
    } finally {
      loading.value = false;
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    loading.value = true;
    error.value = null;

    try {
      const token = await sdk.auth.login("customer", "emailpass", {
        email,
        password,
      });

      if (typeof token !== "string") {
        error.value = "Ek doğrulama gerekiyor";
        return false;
      }

      const { customer: c } = await sdk.store.customer.retrieve();
      customer.value = c;
      return true;
    } catch (err) {
      error.value = getErrorMessage(err, "Giriş başarısız");
      return false;
    } finally {
      loading.value = false;
    }
  };

  const logout = async () => {
    await sdk.auth.logout();
    customer.value = null;
  };

  const loadCustomer = async () => {
    try {
      const { customer: c } = await sdk.store.customer.retrieve();
      customer.value = c;
    } catch {
      customer.value = null;
    }
  };

  const loadAddresses = async () => {
    try {
      const res = await sdk.store.customer.listAddress();
      addresses.value = res.addresses;
    } catch (e) {
      console.error("Adresler alınamadı:", e);
    }
  };

  const addAddress = async (address: HttpTypes.StoreAddAddress) => {
    try {
      const cleanAddress = {
        ...address,
        metadata: address.metadata ?? undefined,
      };
      const res = await sdk.store.customer.createAddress(cleanAddress);
      await loadAddresses();
      return res;
    } catch (e) {
      console.error("Adres eklenemedi:", e);
      throw e;
    }
  };

  return {
    customer,
    loading,
    error,
    register,
    login,
    logout,
    loadCustomer,
    addresses,
    loadAddresses,
    addAddress,
  };
});
