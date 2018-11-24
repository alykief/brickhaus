const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));

const itemsController = require('./controllers/items.js');
app.use('/items', itemsController);

mongoose.connect('mongodb://localhost:27017/bhlifestyle', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to Mongoose');
})

app.listen(3000, ()=>{
  console.log('Listening..');
});
