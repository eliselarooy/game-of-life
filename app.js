const express = require('express');
const router = require('./routes/router');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h1>Conway's Game of Life API</h1>");
});

app.use('/api/v1', router);

const runServer = () => {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
};

runServer();
