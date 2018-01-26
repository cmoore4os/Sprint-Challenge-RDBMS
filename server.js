const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const port = 3000;

server.use(bodyParser.json());

// 
server.get('/', (req, res) => {
  res.send(`Hey the server works!! Now what??`)
})

server.listen(port, () => console.log(`server running on port ${port} `))
