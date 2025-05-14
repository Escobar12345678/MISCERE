const express = require('express');
const cors = require('cors');
const app = express();
const usuariosRoutes = require('./Routes/usuario');

app.use(cors());
app.use(express.json()); // Para leer JSON
app.use('/api/usuarios', usuariosRoutes); // Rutas de usuarios

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
