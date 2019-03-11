import path from 'path'
import fs from 'fs'

module.exports = {
  mode: 'spa',

  server: {
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl/server.crt'))
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '强撸灰飞烟灭',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '强撸灰飞烟灭开黑群聊'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1abc9c' },

  loadingIndicator: {
    name: 'folding-cube',
    color: 'white',
    background: '#1abc9c'
  },

  /*
  ** Global CSS
  */
  css: ['@/assets/css/reset.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['@/plugins/message'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
