console.log("Welcome to node server js")
// Set-ExecutionPolicy Unrestricted             <<cammond to un remove restrection for script in windows

const http = require ('http');
const fs = require('fs');
const home= fs.readFileSync('index.html');
const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url==='/about'){res.end(' all you want to know about us!')}
    else if(req.url==='/contact'){res.end('we dont have phone # and they blocked out email ;)')}
    else if(req.url==='/'){res.end(home)}
    else{
        res.writeHead(404);
        res.end('Page was not found')
    }
    
});

server.listen(3000, ()=>console.log("http://localhost:3000"));