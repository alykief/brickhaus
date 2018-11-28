const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  serving: String,
  calories: Number,
  protein: Number,
  carbohydrates: Number,
  fat: Number,
  sugar: Number,
  fiber: Number
});

const Items = mongoose.model('Item', itemSchema);

module.exports = Items;
