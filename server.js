const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Manejo de las rutas de reescritura
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, req.path === '/' ? 'index.html' : req.path));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
