
/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

module.exports.Ingredient = mongoose.model('ingredient', new mongoose.Schema({
    Name: { type: String,
                required: true,
                minlendgth: 3,
                maxlength: 50
              },
    TotalUric: {
          type: Number,
          required: true
        },

    CalcUric: {
          type: Number,
          required: true
        },

    Rating: { type: Number,
          required: true,
          min: 0,
          max: 5
        },

    Type: { type: String,
          required: true,
          minlendgth: 5,
          maxlength: 50
        },

    Comments: { type: String,
        maxlength: 500
      }

    }));
      
 module.exports.validate = function (ingredient) {
            const schema = {
              Name: Joi.string().min(3).required(),
              TotalUric: Joi.number().required(),
              CalcUric: Joi.number().required(),
              Rating: Joi.number().integer().min(1).max(5).required(),
              Type: Joi.string().min(5).max(50).required(),
              Comments: Joi.string()
            };
            return Joi.validate(ingredient, schema);
};

// module.exports.Ingredient = Ingredient;
// module.exports.validate = validateIngredient();