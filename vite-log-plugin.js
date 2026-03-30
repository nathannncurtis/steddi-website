import fs from 'fs'

const LOG_FILE = './debug.log'

export function logPlugin() {
  // Clear log on start
  fs.writeFileSync(LOG_FILE, '')

  return {
    name: 'debug-log',
    configureServer(server) {
      server.middlewares.use('/api/log', (req, res) => {
        const url = new URL(req.url, 'http://localhost')
        const msg = url.searchParams.get('msg') || ''
        const line = `${new Date().toISOString()} ${msg}\n`
        fs.appendFileSync(LOG_FILE, line)
        res.writeHead(200, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' })
        res.end('ok')
      })
    }
  }
}
