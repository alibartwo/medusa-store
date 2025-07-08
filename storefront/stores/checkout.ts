import { defineStore } from 'pinia'

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    email: '',
    address: {
      first_name: '',
      last_name: '',
      address_1: '',
      city: '',
      postal_code: '',
      phone: '',
      country_code: '',
    },
    shippingMethod: null,
    paymentMethod: null,
  }),
})