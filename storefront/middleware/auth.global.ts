// middleware/auth.global.ts
import { defineNuxtRouteMiddleware, navigateTo } from "#imports";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  // Eğer henüz müşteri bilgisi yüklenmemişse, yükle
  if (auth.customer === null && !auth.loading) {
    auth.loadCustomer();
  }

  // Eğer müşteri bilgisi hala yok ve sayfa auth gerektiriyorsa yönlendir
  if (!auth.customer && to.meta.auth === true) {
    return navigateTo("/auth/giris");
  }
});
