const http = require('http');

const server = http.createServer((req, res) => 
{
    if (req.url === '/') 
    {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Hello DevOps 🚀' }));
    }
    else if (req.url === '/about') 
    {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ info: 'This is DevOps Project 1' }));
    }
    else if (req.url === '/health') 
    {
        res.writeHead(200);
        res.end("OK");
    }
    else 
    {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server.listen(3000, '0.0.0.0', () => {
    console.log('Server running on port 3000');
});
