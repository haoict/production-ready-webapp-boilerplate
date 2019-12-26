/**
 * REQUIRE for Middlewares & Helpers
 */
const express = require('express');
const server = express();
const app = require('./next/getNextApp');
const handle = app.getRequestHandler();
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('../../src/helpers/i18n');
const envConfig = require('../config/env-config');
const { logger } = require('../helpers/logger');
const cookieParser = require('cookie-parser');

const api_lolchamps = require('./api/lolchamps');

const route_items = require('./routes/items');

/**
 * Necessary headers & middlewares
 */
server.use(helmet());
server.use(compression());
server.use(cookieParser());

/**
 * next-i18next middleware
 */
server.use(nextI18NextMiddleware(nextI18next));

/**
 * DEFINE CACHE
 * serve static file with cache, for locales file: 1d, others are 30d
 */
const staticPath = path.join(__dirname, '../../static');
server.use(
  '/static/locales',
  express.static(staticPath + '/locales', {
    maxAge: '1h'
  })
);
server.use(
  '/static',
  express.static(staticPath, {
    maxAge: '30d',
    immutable: true
  })
);

/** DEFINE API
 * serve APIs
 */
server.use('/api/lolchamps', api_lolchamps);

/** DEFINE ROUTES
 * serve web server routes
 */
server.use('/items', route_items);

// handle 404
server.get('*', (req, res) => {
  return handle(req, res);
});

server.listen(envConfig.app.port, err => {
  if (err) throw err;
  logger.log('info', `Web Server listening on port ${envConfig.app.port}`);
});
