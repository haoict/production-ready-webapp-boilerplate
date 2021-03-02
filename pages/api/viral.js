const helper = require('./helper');
const pokedexData = helper.pokedexData;

export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })

  if (!pokedexData) {
    return res.status(500).send({ result: false, message: 'Internal Server Error' });
  }
  const data = helper.getRandomNElementsFromArray(pokedexData, 18);
  return res.send({ result: true, data });
}
