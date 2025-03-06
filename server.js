const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mundo soy Alvaro y estoy en el puerto 3000');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
