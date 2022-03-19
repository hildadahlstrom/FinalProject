/**
 * RecipeList displays each individual recipe within an array and puts it into an Accordion
 * also calls the methods to add and remove from favorites
 */

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Recipe from './Recipe';
import { favArray } from '../../rest/MyApi';
const RecipeList = ({ array, checkRecipes }) => {
  const addFavorite = (recipe) => {
    favArray.add(recipe);
  };
  const removeFavorite = (recipe) => {
    checkRecipes();
    favArray.remove(recipe);
  };
  return (
    <Accordion>
      {array.map((recipe, index) => (
        <Accordion.Item eventKey={index} key={index}>
          <Recipe
            recipe={recipe}
            key={index}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default RecipeList;
