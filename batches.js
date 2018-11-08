function batches(recipe, ingredients) {
  let result = 0;
  const recipeKeys = Object.keys(recipe);
  const ingredientsKeysSize = Object.keys(ingredients).length;
  if (recipeKeys.length == ingredientsKeysSize) {
    for (var i = 0; i < recipeKeys.length; i++) {
      const currentKey = recipeKeys[i]
      if(ingredients[currentKey] != null) {
        let ingredientAmount = ingredients[currentKey]
        let recipeAmount = recipe[currentKey]
        if(recipeAmount <= ingredientAmount) {
          let fitsIntoRecipe = ingredientAmount/recipeAmount >> 0
          if (result == 0 || result > fitsIntoRecipe) {
            result = fitsIntoRecipe;
          }
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }
  }

  return result
}
