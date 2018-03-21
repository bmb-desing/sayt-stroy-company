module.exports = {
  /*
  ** Headers of the page
  */
  router: {
  },
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/noty/3.1.4/noty.min.css' }
    ]
  },
  plugins: [
  ],
  css: [
      '~/assets/css/main.css',
      { src: '~/assets/sass/main.sass', lang: 'sass' }
  ],
  /*
  ** Global CSS
  /*
  ** Add axios globally
  */
  build: {
    vendor: [
      'axios'
    ],
    babel: {
    },
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
