const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const { logger } = require('../../helpers/logger');
const pokedexFile = path.join(__dirname, '../static/data/pokedex.json');

module.exports = router;

// Init: load pokemon data from json file
// Remove or replace this with your real data from database or somewhere
var pokedexData = [];
function loadData() {
  try {
    pokedexData = JSON.parse(fs.readFileSync(pokedexFile));
    if (!pokedexData || !pokedexData.length) {
      throw new Error('Empty pokemon');
    }
    logger.log('info', 'Load Pokemons Data Success. Pokemons Count %s', pokedexData.length);
  } catch (err) {
    logger.log('error', 'Load Pokemons Data Failed: %s', err.message);
  }
}
loadData();

// utility function
function getRandomNElementsFromArray(arr, n) {
  if (!arr || !arr.length || n <= 0) return null;
  const arrClone = JSON.parse(JSON.stringify(arr));
  return arrClone.sort(() => Math.random() - Math.random()).slice(0, n);
}

/**
 * GET /api/mostviewed
 * */
router.get('/mostviewed', (req, res) => {
  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }
  const data = getRandomNElementsFromArray(pokedexData, 18);
  return res.send({ result: true, data });
});

/**
 * GET /api/viral
 * */
router.get('/viral', (req, res) => {
  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }
  const data = getRandomNElementsFromArray(pokedexData, 18);
  return res.send({ result: true, data });
});

/**
 * GET /api/search?name=pokemonName
 * */
router.get('/search', (req, res) => {
  if (!req.query || !req.query.name) {
    return res.send({ result: false, message: 'Empty param' });
  }

  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }

  const queryName = req.query.name.trim().toLowerCase();
  const isFullSearch = req.query.isfullsearch ? req.query.isfullsearch.trim().toLowerCase() === 'true' : false;

  let searchResult = pokedexData.filter(
    (c) => c.name.english.trim().toLowerCase().search(queryName) !== -1 || c.name.japanese.search(queryName) !== -1
  );

  if (!isFullSearch) {
    searchResult = searchResult.slice(0, 10);
  } else {
    // TODO: use paginating
    // temporary solution: cut down results to 100 items to improve performance
    searchResult = searchResult.slice(0, 100);
  }

  const data = searchResult.map((c) => {
    const { id, name } = c;
    return { id, name };
  });

  return res.send({ result: true, data });
});

/**
 * GET /api/pokemons/:id
 * */
router.get('/pokemons/:id', (req, res) => {
  if (!req.params || !req.params.id) {
    return res.send({ result: false, message: 'Empty param' });
  }

  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }

  const data = pokedexData.find((c) => c.id.toString() === req.params.id);
  return res.send({ result: true, data });
});

/**
 * GET /api/pokemons
 * */
router.get('/pokemons', (req, res) => {
  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }
  return res.send({ result: true, data: pokedexData.length });
});
