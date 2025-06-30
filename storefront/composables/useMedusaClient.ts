import Medusa from "@medusajs/js-sdk"

export const useMedusaClient = () => {
  const config = useRuntimeConfig()

  return new Medusa({
    baseUrl: config.public.medusaBackendUrl as string,
    debug: process.env.NODE_ENV === "development",
    publishableKey: config.public.medusaPublishableKey as string,
  })
}
