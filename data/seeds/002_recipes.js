exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, name: "coffee" },
        { id: 2, name: "tea" },
        { id: 3, name: "smoothie" }
      ]);
    });
};
