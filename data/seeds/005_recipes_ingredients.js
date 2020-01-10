
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, unit_of_measure: "ounces", quantity: 1.5},
        {recipe_id: 1, ingredient_id: 2, unit_of_measure: "tablespoon", quantity: 1.5},
        {recipe_id: 1, ingredient_id: 3, unit_of_measure: "grams", quantity: 1.5},
        {recipe_id: 2, ingredient_id: 1, unit_of_measure: "ounces", quantity: 1.5},
        {recipe_id: 2, ingredient_id: 2, unit_of_measure: "teaspoon", quantity: 1.5},
        {recipe_id: 2, ingredient_id: 4, unit_of_measure: "tea_grams", quantity: 1.5},
        {recipe_id: 3, ingredient_id: 1, unit_of_measure: "ounces", quantity: 1.5},
        {recipe_id: 3, ingredient_id: 5, unit_of_measure: "cubes", quantity: 1.5},
        {recipe_id: 3, ingredient_id: 6, unit_of_measure: "slices", quantity: 1.5}
      ]);
    });
};
