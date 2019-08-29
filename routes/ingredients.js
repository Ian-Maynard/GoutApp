/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const { Ingredient, validate } = require('../models/ingredients'); // access the ingredient model 
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {   
    console.log("GET all");
    try {
        const ingredients = await Ingredient.find().sort("Name");
        res.send(ingredients);
    } catch (err) {
        console.log('Error: ',err.message);
    }      
}); // CRUD: Read all Ingredients

router.post('/', async (req, res) => {
    console.log('Post');
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

          let  ingredient = new Ingredient({
              Name: req.body.Name,
              TotalUric: req.body.TotalUric,
              CalcUric: req.body.CalcUric,
              Rating: req.body.Rating,
              Type: req.body.Type,
              Comments: req.body.Comments
            }); 

          await ingredient.save(); 
          res.send(ingredient);    
          console.log(ingredient); 
    } catch (err) {
        console.log('Error: ',err.message);
    }
  }); 
  // Post route
  
router.get('/:id', async (req, res) => {

        try {
            const ingredient = await Ingredient.findById(req.params.id);
            if(!ingredient) return res.status(404).send('Ingredient not found.');
            res.send(ingredient);
        } catch (err) {
            console.log('Error: ',err.message);
        }

}); // CRUD: Read an Ingredient


router.get('/:id', async (req, res) => {

    try {
        const ingredient = await Ingredient.findById(req.params.id);
        if(!ingredient) return res.status(404).send('Ingredient not found.');
        res.send(ingredient);
    } catch (err) {
        console.log('Error: ',err.message);
    }
}); // CRUD: Read an Ingredient

router.get('/type=', async (req, res) => {
    console.log(req);
    try {
        const ingredient = await Ingredient.find({type:req.body});
        if(!ingredient) return res.status(404).send('Ingredient Type not found.');
        res.send(ingredient);
    } catch (err) {
        console.log('Error: ',err.message);
    }

}); // CRUD: Read an Ingredient

module.exports = router;