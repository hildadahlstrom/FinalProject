/**
 * Home page displays important information about the program
 * as well as a list of recipes I have given the user to start off with if they want
 */

import React from 'react';
import RecipeList from '../components/recipe/RecipeList';
import DevFavoriteRecipes from '../data/devFavoriteRecipes'; //premade array of recipes

const Home = () => {
  return (
    <div className='home-page'>
      <br />
      <div className='welcome-box'>
        <h1 className='welcome-text'>Welcome to My Recipe App</h1>
        <h5>
          Click on Find a Recipe above to start searching for recipes to add to
          your Favorites{' '}
        </h5>
      </div>
      <h2>Here are some of my favorites!</h2>
      <RecipeList array={DevFavoriteRecipes} />
    </div>
  );
};

export default Home;
