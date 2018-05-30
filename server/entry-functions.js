import './polyfill'
import * as functions from 'firebase-functions'
import { Nuxt, Builder } from 'nuxt-edge/dist/nuxt-legacy'
import server from './server'

process.env.DEBUG = 'nuxt:*'

const app = server({ Nuxt, Builder })

export const index = functions.https.onRequest((req, res) => {
  app(req, res)
})
