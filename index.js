/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const indexDebugger = require('debug')('app:index');
const dbDebugger = require('debug')('app:db');

const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const port = process.env.PORT || 3000;
const morgan = require ('morgan');
const helmet = require ("helmet");
const config = require ("config");
const ingredients = require("./routes/ingredients.js");
const main = require("./routes/main.js");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/goutDB')
 .then(() => console.log('Connected  to Mongodb...'))
 .catch(err => console.error('Could not connect to MongoDB...',err));

app.use(express.json()); // Parses JSON objects. Not a default function
app.use(helmet()); // Helmet secures HTTP request
app.use('/api/ingreds', ingredients);
app.use('/', main);

app.set('view engine','pug');
app.set('views', './views/layouts');


// console.log("Application Name: "+ config.get('name'));
// // console.log("Mail Password: "+  config.get('app_password'));

// if (app.get('env') === 'development') {
//     app.use(morgan('tiny'));
//     startupDebugger("Environment is set to Development, therefore Morgan logging is enabled");
// } // Morgan Logs requests and should only be used in Dev environments or for troubleshooting.

app.listen(port, () => console.log(`Listening on port ${port}`)); // Event handler 
