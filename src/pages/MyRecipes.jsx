/**
 * MyRecipes displays any recipes the user has added to favorites
 */

import React, { useState } from 'react';
import RecipeList from '../components/recipe/RecipeList';
import { favArray } from '../rest/MyApi';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState(favArray.array);
  const checkRecipes = () => {
    setRecipes(favArray.array);
    return <RecipeList array={recipes} checkRecipes={checkRecipes} />;
  };
  if (favArray.array.length === 0) {
    return (
      <div>
        You have not added any recipes to your favorites yet.
        <br />
        Click on Find a Recipe above to get started
      </div>
    );
  }
  return (
    <>
      <h1>Favorites</h1>
      <RecipeList array={recipes} checkRecipes={checkRecipes} />
    </>
  );
};

export default MyRecipes;
