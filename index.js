const express = require('express');
const faker = require('faker');

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hello express server!');
});

app.get('/new-route', (req, res) => {
  res.send(`Hello, I'm the new route`);
})

//Return a json
app.get('/products', (req, res) => {
  //Const
  const products = [];
  const { size } = req.query;
  const limit = size || 100;

  //Filling the array
  for(let i = 0;i<limit;i++){
    products.push({
      id: i,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }

  res.json(products);
});

app.get('/products/filter',(req, res) => {
  res.send(`I'm a filter`)
})

//End point with 1 parameter
app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: 1000,
  },)
});

//Get
//Paramaters
app.get('/categories/:catId/products/:proId', (req, res) => {
  const {catId, proId} = req.params;
  res.json({
    catId,
    proId,
    name: 'Product 1',
    price: 1000,
  },)
})

//Query paramaters
app.get('/users',(req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }else{
    res.send(`They're not paramaters`);
  }
})

//Listen
app.listen(port, () => {
  console.log('Server started on ' + port);
});
