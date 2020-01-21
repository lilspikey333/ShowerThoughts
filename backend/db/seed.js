const Thought = require("../models/Thought.js");
const seedData = require("./seeds.json");

Thought.deleteMany({})
  .then(() => {
    return Thought.collection.insertMany(seedData);
  })
  .then(() => {
    console.log(seedData);
  });
