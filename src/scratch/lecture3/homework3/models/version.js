const Ingredient = require('./ingredient');


const Version = class {
  constructor(
    {
      cookingTime = 0,
      servingSize = 0,
      ingredients = [],
      instructions = [],
      notes = [],
      tags = [],
    },
    id,
  ) {
    this.id = id;
    this.cookingTime = cookingTime;
    this.servingSize = servingSize;

    this.ingredients = ingredients.map((ingredient, index) => {
      return new Ingredient(ingredient, index + 1);
    });

    this.instructions = instructions;
    this.notes = notes;
    this.tags = tags;
  }

  get() {
    return this;
  }

  static create({ cookingTime, servingSize, ingredients, instructions, notes, tags, id }) {
    const version = new Version({ cookingTime, servingSize, ingredients, instructions, notes, tags }, id);

    version.ingredients = ingredients.map(ingredient => Ingredient.create(ingredient));

    return version;
  }
};

module.exports = Version;
