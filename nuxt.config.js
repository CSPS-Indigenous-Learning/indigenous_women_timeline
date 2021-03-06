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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
        type: "text/javascript",
        integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=",
        crossorigin: "anonymous"
      },
      {
        src: "https://code.jquery.com/ui/1.12.1/jquery-ui.js",
        type: "text/javascript",
        integrity: "sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=",
        crossorigin: "anonymous"
      }
    ]
  },

  router: {  
    //Prod -> _PREPROD -> Indigenous -> ILS Women Timeline: cninv000000000019315

    //base: '/ProdContent/cninv000000000019315/'
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
    silentTranslationWarn: false,
    silentFallbackWarn: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      rules: [{
        test: /\.(ico)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[ext]'
      }

    }]},
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
    //    if(!ctx.isDev) {
    //   config.output.publicPath = '_nuxt/'
    // }
      config.module.rules.push({
        test: /\.(pdf|docx|xlsx)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },{
        test: /\.(vtt)$/i,
        use: [{
          loader: 'file-loader'
        }]
      })
    }
  }
}
