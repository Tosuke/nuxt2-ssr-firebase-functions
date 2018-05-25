module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],

  build: {
    babel: {
      presets: [
        [
          'babel-preset-vue-app',
          {
            targets: process.server
              ? { node: '6.14.0' }
              : { ie: 9, uglify: true }
          }
        ]
      ]
    },
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (process.browser) {
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
