const express = require('express');
const router = express.Router();
const Items = require('../models/itemModel.js')

router.post('/', (req, res)=>{
  Items.create(req.body, (err, createdItem)=>{
    res.json(createdItem);
  });
});

router.get('/', (req, res)=>{
  Items.find({}, (err, foundItems)=>{
    res.json(foundItems);
  });
});

router.delete('/:id', (req, res)=>{
  Items.findByIdAndRemove(req.params.id, (err, deletedItem)=>{
    res.json(deletedItem);
  });
});

router.put('/:id', (req, res)=>{
  Items.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedItem)=>{
    res.json(updatedItem);
  });
});

module.exports = router;
