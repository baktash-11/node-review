console.log("Welcome to node server js")
// Set-ExecutionPolicy Unrestricted             <<cammond to un remove restrection for script in windows

const http = require ('http');
const { url } = require('inspector');
const server = http.createServer((req, res)=>{
    console.log(req.url);

    res.end('Hello Node.js')
});

server.listen(3000);