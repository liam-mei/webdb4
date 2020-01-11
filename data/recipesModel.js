const db = require("./dbConfig");

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(recipe_id) {
  return db("ingredients as i")
    .join("recipes_ingredients as ri", "ri.ingredient_id", "i.id")
    .select("i.name as ingredient_name", "ri.quantity", "ri.unit_of_measure")
    .where({ "ri.recipe_id": recipe_id });
}

function getInstructions(recipe_id) {
  return db("steps as s")
    .where("s.recipe_id", recipe_id)
    .orderBy("steps.order_number");
}

async function addRecipe(recipe) {
  const [id] = await db("recipes").insert(recipe);
  return getRecipesById(id);
}

async function updateRecipe(changes, id) {
  await db("recipe")
    .where({ id })
    .update(changes);
  return findById(id);
}

async function removeRecipe(id) {
  const recipe = await findById(id);
  await db("recipes")
    .where({ id })
    .del();
  return recipe;
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  addRecipe,
  updateRecipe,
  removeRecipe,
  remove2,
  getInstructions
};
