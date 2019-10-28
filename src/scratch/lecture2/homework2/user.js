const Recipe = require('./recipe');

const User = class {
  constructor(name, email, password) {
    this.id = `user-${name.replace(' ', '').toLowerCase()}`; // TODO: UUID

    this.name = name;
    this.email = email;

    // TODO actually we will never store the password... we use a login
    //      for the user to authenticate *with* a password
    //      Perhaps the user has a 'loggedIn' boolean field?
    this._password = password;

    this.recipes = [];
  }

  getRecipeIndexById(id) {
    return this.recipes.map(recipe => recipe.id).indexOf(id);
  }

  getNextRecipeId() {
    return this.recipes[this.recipes.length - 1].id + 1;
  }

  addRecipe(title, details) {
    this.recipes.map(recipe => recipe.title).includes(title)
      ? console.log('no duplicated recipe title allowed')
      : this.recipes.add(new Recipe(title, details, this.getNextRecipeId()));
  }

  deleteRecipeById(id) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }

  getRecipeById(id) {
    let index = this.getRecipeIndexById(id);
    return this.recipes[index];
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  setUserName(newName) {
    this.name = newName;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }
};

module.exports = User;
