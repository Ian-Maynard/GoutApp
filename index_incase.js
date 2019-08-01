/* jshint esversion: 6 */ 
// const config = require('config');
const indexDebugger = require('debug')('app:index');
const dbDebugger = require('debug')('app:db');
const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const port = process.env.PORT || 3000;
const morgan = require ('morgan');
const helmet = require ("helmet");
const config = require ("config");


app.use(express.json()); // Parses JSON objects. Not a default function
app.use(helmet()); // Helmet sequres HTTP request

console.log("Application Name: "+config.get('name'));
console.log("Mail Password: "+config.get('app_password'));

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startupDebugger("Environment is set to Development, therefore Morgan logging is enabled");
} // Morgan Logs requests and should only be used in Dev environments or for troubleshooting.


app.listen(port, () => console.log(`Listening on port ${port}`)); // Event handler 

const ingreds =  [
    {id:1, name:"Bacon", rating:"c"},
    {id:2, name:"Egg", rating:"a"},
    {id:3, name:"Shrimp", rating:"d"},
    {id:4, name:"Green Onions", rating:"a"},
    {id:5, name:"Peanuts", rating:"a"},
    {id:6, name:"Steak", rating:"c"},
    {id:7, name:"Oranges", rating:"a"},
    {id:8, name:"Apples", rating:"a"},
    {id:9, name:"Cherries", rating:"a"}
];// Create the data structure


app.get('/', (req, res) => { 
    res.send('This is the ROOT ROUTE');
});  // Base route

app.get('/api/ingreds', (req, res) => {         
    res.send(ingreds);
}); // CRUD: Read all Ingredients

app.get('/api/ingreds/:id', (req, res) => {
    const ingred = ingreds.find(i => i.id === parseInt(req.params.id));
    if (!ingred) res.status(404).send(req.params.id+" is unknown.");
    res.send(ingred);
}); // CRUD: Read an Ingredient

app.post('/api/ingreds', (req, res) => {        
    const { error } = validateIngred(req.body); // Validate
    if (error) return res.status(400).send(res.error.details[0].message);
        
    const ingred = {
        id: ingreds.length + 1,
        name: req.body.name, 
        rating:req.body.rating
    };
    ingreds.push(ingred);
    res.send(ingred);
}); // CRUD - Create an ingredient entry

app.put('/api/ingreds/:id', (req, res) => {

    console.log(req.body);

    const ingred = ingreds.find(i => i.id === parseInt(req.params.id));
    if (!ingred) return res.status(404).send(req.params.id+" is unknown.");
    // Access and supply requested record. Return error if not found
        
    const { error } = validateIngred(req.body);
    if (error) return res.status(400).send(res.error.details[0].message);
    // Validate data supplied and return error if validation fails.

// Assign
  ingred.name = req.body.name;
  ingred.rating = req.body.rating;

// Send it back 
res.send(ingred);

}); // CRUD: Update an Ingredient 


app.delete('/api/ingreds/:id', (req, res) => {
    const ingred = ingreds.find(i => i.id === parseInt(req.params.id));
    if (!ingred) res.status(404).send(req.params.id+" is unknown.");
    res.send(ingred);

    const index = ingreds.indexOf(ingred); // locate index of requested record then...

    ingreds.splice(index, 1);  // use it to delete record and splice array then...
    res.send(ingred); // send the deleted record.

}); // CRUD: Delete an Ingredient


function validateIngred(ingred){
    const schema = {
        name: Joi.string().min(3).required(),
        rating: Joi.string().min(1).length(1).required()
    };
    return Joi.validate(ingred,schema);
} // Validate Ingredient schema