const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname + '/../built-storybook')));

const PORT = 9090;
app.listen(PORT, () => {
  console.log('Storybook is running at http://localhost:%d', PORT);
});
