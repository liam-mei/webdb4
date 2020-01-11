const express = require('express');
const db = require('./data/recipesModel')

const server = express();

server.use(express.json());

server.get('/api/recipes', async (req, res, next) => {
  try {
    res.json(await db.getRecipes())
  } catch (error) {
    res.status(500).json(error)
  }
})

server.get('/api/shoppinglist/:id', async (req, res, next) => {
  try {
    res.json(await db.getShoppingList(req.params.id))
  } catch (error) {
    res.status(500).json(error)
  }
})

server.get('/api/instructions/:id', async (req, res, next) => {
  try {
    res.json(await db.getInstructions(req.params.id))
  } catch (error) {
    res.status(500).json(error)
  }
})






const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});