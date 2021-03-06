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
const bodyParser = require('body-parser');
const querystring = require('querystring');
var cors = require('cors');

// console.log(process.env);

mongoose.connect('mongodb://localhost/goutDB',{ useNewUrlParser: true })
 .then(() => console.log('Connected  to Mongodb...'))
 .catch(err => console.error('Could not connect to MongoDB...',err));

app.use(express.json()); 
app.use(cors());
app.use('/api/ingreds', ingredients);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', main);
app.listen(port, () => console.log(`Listening on port ${port}`)); 
