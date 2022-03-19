/**
 * This component handles the picture that is included with the recipe
 */

import React from 'react';

const RecipePicture = ({ recipe }) => {
  const photoDescription = `photo of ${recipe.strMeal}`;
  return <img src={recipe.strMealThumb} alt={photoDescription} />;
};

export default RecipePicture;
