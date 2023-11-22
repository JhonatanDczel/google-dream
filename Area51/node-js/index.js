const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Página Generada con Node.js</title>
    </head>
    <body>
      <h1>¡Hola, Mundo!</h1>
      <p>Esta es una página generada dinámicamente con Node.js y Express.</p>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

const puerto = 3000;

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

