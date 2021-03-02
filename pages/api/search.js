const helper = require('./helper');
const pokedexData = helper.pokedexData;

export default function handler(req, res) {
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
}
