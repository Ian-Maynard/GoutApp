/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const Joi = require('@hapi/joi');

 function validate (ingredient) {
            const schema = {
              name: Joi.string().min(3).required(),
              totalUric: Joi.number().required(),
              calcUric: Joi.number().required(),
              rating: Joi.number().integer().min(1).max(5).required(),
              class: Joi.string().min(5).max(50).required(),
              comments: Joi.string().max(200)
            };
            return Joi.validate(ingredient, schema);
}

exports.validate = validate();