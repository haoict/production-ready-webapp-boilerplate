const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { logger } = require('../../helpers/logger');
const dataFile = path.join(__dirname, './champions.json');

module.exports = router;

var champsData = [];
function loadData() {
  try {
    champsData = JSON.parse(fs.readFileSync(dataFile));
    if (!champsData || !champsData.length) {
      throw new Error('Empty champions');
    }
    logger.log('info', 'Load Champions Data Success. Champions Count %s', champsData.length);
  } catch (err) {
    logger.log('error', 'Load Champions Data Failed: %s', err.message);
  }
}
loadData();

/**
 * GET /api/lolchamps/search?name=championName
 * */
router.get('/search', (req, res) => {
  if (!req.query.name) {
    return res.send({ result: false, message: 'Empty param' });
  }

  const queryName = req.query.name.trim().toLowerCase();

  if (!champsData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }

  let searchResult = champsData.filter(
    c =>
      c.name
        .trim()
        .toLowerCase()
        .search(queryName) !== -1
  );

  const data = searchResult.map(c => {
    const { id, name, title, icon } = c;
    return { id, name, title, icon };
  });

  return res.send({ result: true, data });
});

/**
 * GET /api/lolchamps/:id
 * */
router.get('/:id', (req, res) => {
  if (!req.params || !req.params.id) {
    return res.send({ result: false, message: 'Empty param' });
  }

  if (!champsData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }

  const data = champsData.find(c => c.id === req.params.id);

  return res.send({ result: true, data });
});
