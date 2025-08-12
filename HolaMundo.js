const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
res.end('Hola mundo, soy Tiziana Ochoa!');
});

server.listen(3001, () => {
  console.log('Servidor escuchando en http://localhost:3001');
});