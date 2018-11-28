const express = require('express');
const app = express();
const itemsController = require('./controllers/itemsController.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to Mongoose');
})

app.use('/items', itemsController);
app.use(express.json());
app.use(express.static('public'));

app.listen(3000, ()=>{
  console.log('Listening..');
});
