//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    '/api/**': { proxy: `${process.env.NUXT_API_ENDPOINT}/api/**` }
  }
});
