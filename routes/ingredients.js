/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const { Ingredient, validate} = require('../models/ingredient'); // access the ingredient model 
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {         
    res.send(ingredients);
}); // CRUD: Read all Ingredients

router.get('/:id', (req, res) => {
  
}); // CRUD: Read an Ingredient

module.exports = router;