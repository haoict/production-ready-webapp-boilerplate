const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare();
module.exports = app;
