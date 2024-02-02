const express = require('express');
const productsRoutes = require('./routes/productsRoutes');

const CLIENT_URL = 'http://localhost:3000';
const PORT = process.env.PORT || 3001;

const app = express();


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", CLIENT_URL);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  next();
});

app.use(express.json());

app.use('/products', productsRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}\n`);
});
