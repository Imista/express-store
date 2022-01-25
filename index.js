const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hello express server!');
});

app.get('/new-route', (req, res) => {
  res.send(`Hello, I'm the new route`);
})

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 1000,
  })
})

app.listen(port, () => {
  console.log('Server started on ' + port);
});