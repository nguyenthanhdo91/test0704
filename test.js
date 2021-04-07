const http = require('http');

var server = http.createServer(
    (request, Response)=>{
        Response.end('hello Node');
        Response.end ('こんにちは！');
    }
);
server.listen(3000);
