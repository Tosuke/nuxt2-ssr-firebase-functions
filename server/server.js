import express from 'express'

export default ({ Nuxt, Builder }) => {
  const app = express()

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = process.env.NODE_ENV === 'development'

  config.render = {
    static: {
      setHeaders (res, path, stat) {
        const day = 24 * 3600
        res.setHeader('Cache-Control', `public,max-age=${day},s-maxage=${day}`)
      }
    }
  }

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build()
  }

  if (!config.dev) {
    app.use((req, res, next) => {
      let sec
      if (req.path.match(/^\/_nuxt/)) {
        sec = 365.25 * 24 * 3600 // a year
      } else {
        sec = 3600 // an hour
      }
      res.setHeader('Cache-Control', `public,max-age=${sec},s-maxage=${sec}`)
      next()
    })
  }

  // Give nuxt middleware to express
  app.use((req, res) => {
    try {
      nuxt.render(req, res)
    } catch (err) {
      console.error(err)
    }
  })

  return app
}
