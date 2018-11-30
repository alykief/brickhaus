const express = require('express');
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const itemsController = require('./controllers/itemsController.js');
app.use('/items', itemsController);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/meancrud', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to Mongoose');
})

app.listen(PORT, ()=>{
  console.log('Listening..');
});
