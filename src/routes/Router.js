/**
 * Router holds all the routes that are used. They correspond with the links in Navigation
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MyRecipes from '../pages/MyRecipes';
import RecipeSearch from '../pages/RecipeSearch';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-recipes' element={<MyRecipes />} />
        <Route path='/search' element={<RecipeSearch />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;

const NotFound = () => {
  return <div>Page Not Found</div>;
};
