const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hola nube!');
});

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
