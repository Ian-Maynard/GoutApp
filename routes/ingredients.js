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
        var ingredient = await Ingredient.find({Name: name});
        if (!ingredient) return res.status(404).send('Ingredient not found. Really');
        let inn = ingredient.Name;
        console.log(inn);
        res.send(ingredient);
    } 

    catch (err) {
        console.log('Error!: ',err.message);
    }

}); // CRUD: Read an Ingredient


router.get('/type/:type', async (req, res) => {
    const type = req.params.type;

    try {
        const ingredient = await Ingredient.find({Type: type});
        if (!ingredient) return res.status(404).send('Ingredient not found. Really');
        res.send(ingredient.Name);
    } 
    catch (err) {
        console.log('Error!: ',err.message);
    }
}); // CRUD: Read an Ingredient

router.get('/ratings/:ratings', async (req, res) => {
    const ratings = req.params.ratings;             
    console.log(req.params.ratings);

    try {
        const ingredient = await Ingredient.find({Rating: ratings});
        if (!ingredient) {
            return res.status(404).send('No Ingredient with a rating of'+ratings+' found.');
        }
        res.send(ingredient);
    } 
    catch (err) {
        console.log('Error!: ',err.message);
    }
}); // CRUD: Read an Ingredient

router.get('/total/:total', async (req, res) => {
    const total = req.params.total;
    console.log(req.params.total);

    try {
        const ingredient = await Ingredient.find({TotalUric: total});
        if (!ingredient) return res.status(404).send('No Ingredient with a total of '+total+' found.');
        res.send(ingredient);
    } 
    catch (err) {
        console.log('Error!: ',err.message);
    }
}); // CRUD: Read an Ingredient


router.get('/eval/:eval', async (req, res) => {
const inStr = req.params.eval.split(" ");
const ingredientCount = inStr.length;
var average = 0;


    // for (i = 0; i < ingredientCount; i++) {

    //     console.log("i is: "+i+" "+inStr[i]);

        try {
            const ingredient = await Ingredient.find({ Name: inStr[0]});
                if (!ingredient) return res.status(404).send('No Ingredient with a name of '+inStr[0]+' found.');  
                average = average + ingredient.TotalUric;
                console.log("Ingredient " + ingredient.TotalUric+ " Average: ", average);  
            } 
        catch (err) {
            console.log('Error!: ',err.message);
        }
    // }
    average  = average / inStr.length;
    res.send({average: average});

}); // CRUD: Read an Ingredient



router.get('/:id', async (req, res) => {
    try {
        const ingredient = await Ingredient.findById(req.params.id);
        if (!ingredient) return res.status(404).send('Ingredient not found.');
        res.send(ingredient);
    } 
    catch (err) {
        console.log('Error: ',err.message);
    }
}); // CRUD: Read an Ingredient

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