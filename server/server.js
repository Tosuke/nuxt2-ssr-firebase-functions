import express from 'express'
import api from './api'

export default ({ Nuxt, Builder }) => {
  const app = express()

  // Import API Routes
  app.use('/api', api)

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = process.env.NODE_ENV === 'development'

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  return app
}
