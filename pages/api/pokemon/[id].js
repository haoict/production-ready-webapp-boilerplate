const helper = require('../helper');
const pokedexData = helper.pokedexData;

export default function handler(req, res) {
  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }

  const data = pokedexData.find((c) => c.id.toString() === req.query.id);
  return res.send({ result: true, data });
}
