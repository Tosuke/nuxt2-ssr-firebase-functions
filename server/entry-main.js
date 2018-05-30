import { Nuxt, Builder } from 'nuxt-edge'
import server from './server'

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 5000

const app = server({ Nuxt, Builder })

app.set('port', port)

// Listen the server
app.listen(port, host)
console.log(`Server listening on ${host}:${port}`)
