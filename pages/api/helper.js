let pokedexData = require('../../public/static/data/pokedex.json');

function getRandomNElementsFromArray(arr, n) {
  if (!arr || !arr.length || n <= 0) return null;
  const arrClone = JSON.parse(JSON.stringify(arr));
  return arrClone.sort(() => Math.random() - Math.random()).slice(0, n);
}

function loadData() {
  try {
    if (!pokedexData || !pokedexData.length) {
      throw new Error('Empty pokemon');
    }
    console.log('info', 'Load Pokemons Data Success. Pokemons Count %s', pokedexData.length);
  } catch (err) {
    console.log('error', 'Load Pokemons Data Failed: %s', err.message);
  }
}
loadData();

module.exports = { pokedexData, getRandomNElementsFromArray };
