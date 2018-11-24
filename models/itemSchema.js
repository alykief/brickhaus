const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number,
  sugar: Number,
  fiber: Number
})

const Items = mongoose.model('Item', itemSchema);

module.exports = Items;
