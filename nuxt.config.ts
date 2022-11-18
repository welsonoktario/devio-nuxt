// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["locomotive-scroll/dist/locomotive-scroll.min.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
});
