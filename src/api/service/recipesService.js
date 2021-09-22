const recipesModel = require('../models/recipesModel');

module.exports = {
  async create(name, ingredients, preparation, user) {
    const newRecipe = await recipesModel.create(name, ingredients, preparation, user);

    return newRecipe;
  },
};