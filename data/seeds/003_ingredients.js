exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "sugar" },
        { id: 2, name: "water" },
        { id: 3, name: "coffee" },
        { id: 4, name: "tea" },
        { id: 5, name: "ice" },
        { id: 6, name: "fruit" }
      ]);
    });
};
