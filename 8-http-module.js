const http = require('http');
//req means request and res means response
//request means incoming request from client
//response is my response back
const server = http.createServer((req, res)=>{
    console.log(req);
if(req.url === '/'){
    res.end('This is my home ty.')
}
if(req.url === '/about'){
    res.end('Here is our stuff bla bla')
}
})
server.listen(5000)