export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'indigenous_women_timeline',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/general_styles.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      strategy: 'prefix',
      defaultLocale: 'en'
    }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  i18n: {
    strategy: 'prefix',
       useCookie: true,
    // Cookie name
    cookieKey: 'i18n_redirected',
    // Set to always redirect to value stored in the cookie, not just once
    vueI18nLoader: true,
    locales: [{
        code: 'en',
        name: 'English',
        iso: 'en-CA',
        file: 'en.js'
      },
      {
        code: 'fr',
        name: 'Français',
        iso: 'fr-CA',
        file: 'fr.js'
      }
    ],
    lazy: true,
    loadedLanguages :['en','fr'],
    langDir: 'lang/',
    defaultLocale: "en",
    fallbackLocale: 'en',
    fallbackRoot: true,
    silentTranslationWarn: true,
    silentFallbackWarn: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
