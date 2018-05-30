import express from 'express'

export default ({ Nuxt, Builder }) => {
  const app = express()

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
  app.use((req, res) => {
    res.setHeader('Cache-Control', 'public,max-age=150,s-maxage=150')
    try {
      nuxt.render(req, res)
    } catch (err) {
      console.error(err)
    }
  })

  return app
}
