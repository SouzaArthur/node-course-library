const http = require("http");
const port = 3000;

const rotas = {
    '/': 'Node course',
    '/books': 'Page of books',
    '/authors': 'Authors page',
    '/publisher': 'Publisher page',
    '/about': 'Information about project'
};

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end(rotas[request.url]);
});

server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});