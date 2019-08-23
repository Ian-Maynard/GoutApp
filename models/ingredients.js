/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 
const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Ingredient = mongoose.model('ingredient', new mongoose.Schema({
    name: { type: String,
                required: true,
                minlendgth: 3,
                maxlength: 50
              },
    totalUric: {
          type: Double,
          required: true
        },

    calcUric: {
          type: Double,
          required: true
        },

    rating: { type: Number,
          required: true,
          min: 0,
          max: 5
        },

    class: { type: String,
          required: true,
          minlendgth: 5,
          maxlength: 50
        },

    comments: { type: String,
        maxlength: 500
      }

    }));
      
function validateIngredient(ingredient) {
            const schema = {
              name: Joi.string().min(3).required(),
              totalUric: Joi.Double.required(),
              calcUric: Joi.Double.required(),
              rating: Joi.number().integer().min(1).max(5).required(),
              class: Joi.string().min(5).max(50).required()
            };
            return Joi.validate(ingredient, schema);
          }
        