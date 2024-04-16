const app = require('./server')
const config =  require('./config.json')


const http = require('http').createServer(app)
const port = config.server.port || 8000

http.listen(port,()=>{
    console.log(`${port}:Server has been deployment...`)
})