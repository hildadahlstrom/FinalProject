/**
 * FavoriteArray class holds all the recipes that the user puts into their favorites
 * It also adds or removes when the button is clicked
 * I could not find a good api to use for this, so I am just using an array
 */

class FavoriteArray {
  constructor() {
    this.array = [];
  }
  add(recipe) {
    this.array.push(recipe);
  }
  remove(recipe) {
    for (const item of this.array) {
      if (item.idMeal == recipe.idMeal) {
        this.array.splice(this.array.indexOf(item), 1);
      }
    }
  }
}

export const favArray = new FavoriteArray();
