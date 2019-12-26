const express = require('express');
const router = express.Router();
const app = require('../next/getNextApp');

module.exports = router;

router.get('/', (req, res) => {
  const actualPage = '/';
  const queryParams = {};
  app.render(req, res, actualPage, queryParams);
});

router.get('/:keyword', (req, res) => {
  const actualPage = '/search';
  const queryParams = { keyword: req.params.keyword };
  app.render(req, res, actualPage, queryParams);
});
