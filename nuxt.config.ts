// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  icon: {
    collections: ["tabler"],
  },

  app: {
    head: {
      title: "Exploria | Frontend Task",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/icon", "@vueuse/nuxt"],
  compatibilityDate: "2024-10-07",
});
