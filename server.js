const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Leer el archivo app.json
let rewrites;
fs.readFile('./app.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer app.json:', err);
    return;
  }
  rewrites = JSON.parse(data).rewrites;
});

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Manejo de las rutas de reescritura
app.get('*', (req, res) => {
  const rewrite = rewrites.find(r => r.source === req.path);
  if (rewrite) {
    res.sendFile(path.join(__dirname, rewrite.destination));
  } else {
    res.sendFile(path.join(__dirname, 'index.html')); // Redirigir a index.html si no hay coincidencia
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
