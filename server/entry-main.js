import { Nuxt, Builder } from 'nuxt-edge'
import server from './server'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const app = server({ Nuxt, Builder })

app.set('port', port)

// Listen the server
app.listen(port, host)
console.log(`Server listening on ${host}:${port}`)
