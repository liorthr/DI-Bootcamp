const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('Hello from my first server')
    console.log('url=>', req.url)
    res.end('<h1>Hi my server</h1>')
})

server.listen(3001);