import http from 'node:http'
import { serveStaticFiles } from './utils/serve-static.js'
import { handleGet, handlePost } from './handlers/routeHandlers.js'


const port = 8000


const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
  if (req.url === '/api'){
    if (req.method === 'GET') {
    return await handleGet(res)
    } else if (req.method === 'POST') {
      return handlePost(req, res)
    }
  } 
  else if (!req.url.startsWith('/api')) {
    return await serveStaticFiles(req, res, __dirname)
  }
})

server.listen(port, ()=>{
  console.log(`server is running on port: ${port}`)
})