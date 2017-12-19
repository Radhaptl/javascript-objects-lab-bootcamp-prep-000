var recipes = {egg: 1}
function updateObjectWithKeyAndValue(recipes, ingredients, value){
  return Object.assign ({}, recipes, { [ingredients]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredients, value) {
  recipes[ingredients] = value
  return recipes 
}

function deleteFromObjectByKey(recipes, ingredients){ 
  return Object.assign({},delete recipes.ingredients)
}

function destructivelyDeleteFromObjectByKey (object, key)
{ delete object.key
return recipes
}



