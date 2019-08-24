/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const { Ingredient, validate} = require('../models/ingredients_m'); // load the ingredient model 
const express = require('express'); // Load express
const router = express.Router(); // Load express router

router.get('/', async (req, res) => {
    console.log('Get');
    try {
      const ingredients = await Ingredient.find().sort('name');
      res.send(ingredients);
    }
    catch (err) {
      console.log('Error: ',err.message);
      }
  });

module.exports = router; // export the router