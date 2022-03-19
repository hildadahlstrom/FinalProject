/**
 * SearchResults component renders any results that come back when a user performs a search
 * or it returns a message when there are no results for a search
 */

import React from 'react';
import RecipeList from '../recipe/RecipeList';

const SearchResults = ({ results, searchTerm, setRecipes }) => {
  if (!results || results.length === 0) {
    return (
      <>
        <p>Seeing results for '{searchTerm}'</p>
        <p>There are no results for this search. Please try again</p>
      </>
    );
  }
  return (
    <>
      <p>Seeing results for: '{searchTerm}'</p>
      <RecipeList array={results} setRecipes={setRecipes} />
    </>
  );
};

export default SearchResults;
