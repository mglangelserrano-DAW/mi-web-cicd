const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify({ 
    estado: "OK",
    mensaje: "¡Servidor web desplegado con éxito en el contenedor!",
    modulo: "DAW - Módulo 0614",
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});

module.exports = server;