const http = require('http');

var server = http.createServer(
    (request, Response)=>{
        Response.end('hello Node');
    }
);
server.listen(3000);
