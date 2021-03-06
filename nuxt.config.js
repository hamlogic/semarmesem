export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Semarmesem.art - Bring the mythology into the art',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Semarmesem.art is a collectible NFT arts, made by professional graphic designer team and bring the Javanesse mythology into the chain.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '400' },
      { property: 'og:image:height', content: '300' },
      { property: 'og:image:alt', content: 'Semar Mesem Art' },
      { property: 'og:image', content: 'assets/banner.png' },
      { name: 'twitter:title', content: 'Semar Mesem Art' },
      { name: 'twitter:description', content: 'Bring the Javanesse mythology into the Blockchain. Created by professional Graphic Designer team, exclusive on Ethereum Blockchain. Just 1 of 1 edition every art.' },
      { name: 'twitter:image', content: 'assets/banner.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', { duration: 300 }],
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  googleAnalytics: {
    id: 'G-NZTYY3T204'
  },

  sitemap: {
    hostname: 'https://semarmesem.art',
    gzip: true,
    routes: [
      '/story',
    ]
  },
}
