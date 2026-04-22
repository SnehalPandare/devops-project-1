const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Hello DevOps 🚀' }));
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
