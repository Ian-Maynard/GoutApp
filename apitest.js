/* jshint esversion: 6 */ 
/* jshint esversion: 8 */ 

const apiKey = 'd7529acf359449c0afc37ff667ca936b';
import SpoonacularApi from 'spoonacular_api';

let apiInstance = new SpoonacularApi.DefaultApi();
let ingredientList = "ingredientnodeList_example"; // String | The ingredient list of the recipe, one ingredient per line.
let servings = 3.4; // Number | The number of servings that you can make from the ingredients.
let opts = {
  'includeNutrition': true // Boolean | Whether nutrition data should be added to correctly parsed ingredients.
};
apiInstance.parseIngredients(ingredientList, servings, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```