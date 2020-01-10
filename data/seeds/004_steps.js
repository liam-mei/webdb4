exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { id: 1, step: "add cold water", order_number: 1, recipe_id: 1 },
        { id: 2, step: "add sugar", order_number: 2, recipe_id: 1 },
        { id: 3, step: "add coffee", order_number: 3, recipe_id: 1 },
        { id: 4, step: "add hot water", order_number: 1, recipe_id: 2 },
        { id: 5, step: "add lots of sugar", order_number: 2, recipe_id: 2 },
        { id: 6, step: "add a little tea", order_number: 3, recipe_id: 2 },
        { id: 7, step: "add 8 oz of water", order_number: 1, recipe_id: 3 },
        { id: 8, step: "add ice", order_number: 2, recipe_id: 3 },
        { id: 9, step: "add fruit", order_number: 3, recipe_id: 3 }
      ]);
    });
};
