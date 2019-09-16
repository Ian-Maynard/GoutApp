/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const { Ingredient, validate, validateType } = require('../models/ingredients'); // access the ingredient model 
const express = require('express');
const router = express.Router();
const url = require('url');
const querystring = require('querystring');
const bodyParser = require('body-parser');



router.get('/', async (req, res) => {   
    try {
        const ingredients = await Ingredient.find().sort("Name");
        res.send(ingredients);
    } catch (err) {
        console.log('Error: ',err.message);
    }      
}); // CRUD: Read all Ingredients


router.get('/name/:name', async (req, res) => {
    const name = req.params.name;
    console.log(req.params.name);

    try {
        const ingredient = await Ingredient.findAll({Name: name});
        if(!ingredient) return res.status(404).send('Ingredient not found. Really');
        res.send(ingredient);
    } 
    catch (err) {
        console.log('Error!: ',err.message);
    }
}); // CRUD: Read an Ingredient

router.get('/type/:type', async (req, res) => {
    const type = req.params.type;
    console.log('Type is ',req.params.type);

    try {
        const ingredient = await Ingredient.find({Type: type});
        if(!ingredient) return res.status(404).send('Ingredient not found. Really');
        res.send(ingredient);
    } 
    catch (err) {
        console.log('Error!: ',err.message);
    }
}); // CRUD: Read an Ingredient





// router.get('/:id', async (req, res) => {
//     try {
//         const ingredient = await Ingredient.findById(req.params.id);
//         if(!ingredient) return res.status(404).send('Ingredient not found.');
//         res.send(ingredient);
//     } 
//     catch (err) {
//         console.log('Error: ',err.message);
//     }
// }); // CRUD: Read an Ingredient

// MyModel.find({ name: 'john', age: { $gte: 18 }});



router.post('/', async (req, res) => {
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
  

module.exports = router;