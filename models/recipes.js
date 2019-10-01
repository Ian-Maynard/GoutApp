
/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const ingredient = require('./ingredients');
const { Ingredient, validateIngredient} = require('../models/ingredients');

module.exports.Recipe = mongoose.model('recipe', new mongoose.Schema({
    name: { type: String,
                required: true,
                minlendgth: 3,
                maxlength: 80
              },

    ingredients: { type: [Ingredient],
                    required: true,
                    default: undefined,
                    minlength: 1,
                    maxlength: 30
    },

    rating: {type: string,
              required: true,
              minlength: 1, 
              maxlength : 1,
    },

    source: {
        type: String,
                required: true,
                minlendgth: 3,
                maxlength: 30
    },

    url: { type: String,
        maxlength: 500
      },

    comments: { type: String,
        maxlength: 500
      }

    }));
    
//  module.exports.validateRecipe = function (recipe) {
//             const schema = {
//               Name: Joi.string().min(3).required(),
//               TotalUric: Joi.number().required(),
//               CalcUric: Joi.number().required(),
//               Rating: Joi.number().integer().min(1).max(5).required(),
//               Type: Joi.string().min(5).max(50).required(),
//               Comments: Joi.string()
//             };
//             return Joi.validate(ingredient, schema);
// };
