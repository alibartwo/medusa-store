import { defineConfig, loadEnv } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },

  admin: {
    disable: true,
  },
  modules: [
    {
      resolve: "./src/modules/brand",
    },
    {
      resolve: "./src/modules/cms",
      options: {
        apiKey: process.env.CMS_API_KEY,
      },
    },
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "./src/modules/paytr",
            id: "paytr",
            options: {
              merchant_id: process.env.PAYTR_MERCHANT_ID || "...",
              merchant_key: process.env.PAYTR_MERCHANT_KEY || "...",
              merchant_salt: process.env.PAYTR_MERCHANT_SALT || "...",
            },
          },
        ],
      },
    },
  ],
});
