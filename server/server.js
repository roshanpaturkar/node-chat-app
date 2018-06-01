const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();

app.use(express.static(publicPath));

// app.get('/', (request, response) => {
//   response.send('Welcome to chat app!')
// });

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
