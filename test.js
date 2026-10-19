const http = require('http');
const server = require('./server');
const testPort = 3001;

server.listen(testPort, () => {
  http.get(`http://localhost:${testPort}`, (res) => {
    if (res.statusCode === 200) {
      console.log("✅ TEST SUPERADO: El servidor responde con código 200 OK.");
      server.close(() => process.exit(0));
    } else {
      console.error(`❌ TEST FALLIDO: Se esperaba código 200 y se obtuvo ${res.statusCode}`);
      server.close(() => process.exit(1));
    }
  }).on('error', (err) => {
    console.error("❌ ERROR DE RED EN TEST:", err.message);
    server.close(() => process.exit(1));
  });
});