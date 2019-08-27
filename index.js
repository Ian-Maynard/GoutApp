/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const indexDebugger = require('debug')('app:index');
const dbDebugger = require('debug')('app:db');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ingredients = require("./routes/ingredients.js");
const main = require("./routes/main.js");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/goutDB')
 .then(() => console.log('Connected  to Mongodb...'))
 .catch(err => console.error('Could not connect to MongoDB...',err));

app.use(express.json()); 
app.use('/api/ingreds', ingredients);
app.use('/', main);

app.listen(port, () => console.log(`Listening on port ${port}`)); 
