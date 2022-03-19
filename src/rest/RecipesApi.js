/**
 * RecipeApi holds all the methods for getting recipes from the API that I chose
 * https://www.themealdb.com/api.php TheMealDB was used to pull recipes from
 * Within RecipeApi, get recipes by Letter, Name, or a Random meal
 * Returns an array of meals
 */

const RECIPE_ENDPOINT = 'https://www.themealdb.com/api/json/v1/1';
const search = '/search.php?';
let query = '';

class RecipeApi {
  sendRequest = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  getRandomMeal = async () => {
    query = '/random.php';
    const response = await this.sendRequest(`${RECIPE_ENDPOINT}${query}`);
    return response.meals;
  };

  getMealsByLetter = async (letter) => {
    query = 'f=' + letter;
    const response = await this.sendRequest(
      `${RECIPE_ENDPOINT}/${search}${query}`
    );
    return response.meals;
  };
  getMealsByName = async (searchTerm) => {
    query = 's=' + searchTerm;
    const response = await this.sendRequest(
      `${RECIPE_ENDPOINT}/${search}${query}`
    );
    return response.meals;
  };
}

export const recipeApi = new RecipeApi();
