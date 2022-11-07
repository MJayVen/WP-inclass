const express = require('express')
const app = express()

const productsController = require('./controllers/products');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.setHeader('SUNY', '*');
//   // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
//   // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });

// typescript goes through this pipeline. if one app.use fails, it will goes to the next one

// static site
app.use('/', express.static('client/dist'));

app.get('/', (req, res) => {
  res.status(200).send('Hello, can you hear me?'); 
})
// example of throwing an error
.get('/error',(req,res) => {
  sss.PORT();
})
.use('/api/v1/products', productsController)

// this is 
app.get('*', (req, res) => {
  sss.PORT();
  res.sendFile('./client/dist/index.html', {root:'./client/dist'});
})

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.httpCode ?? 500).send(
    {
      message: err.msg ?? 'Something went wrong!',
      status: err.httpCode ?? 500
    }
  );
  
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
