const express = require('express')
const app = express()

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Railway, can you hear me?');
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
