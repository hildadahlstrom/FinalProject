/**
 * RecipeSearch is the page that handles all of the searching. User can search by name by entering a term,
 * search by first letter, or get a random recipe
 * This page also displays all the results in an Accordion
 */

import React, { useState, useEffect } from 'react';
import NameSearch from '../components/search/NameSearch';
import LetterSearch from '../components/search/LetterSearch';
import { recipeApi } from '../rest/RecipesApi';
import SearchResults from '../components/search/SearchResults';
import RandomRecipe from '../components/search/RandomRecipe';

const RecipeSearch = () => {
  const [results, setResults] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const submitSearchByName = async (term) => {
    setSearchTerm(term);
    await recipeApi
      .getMealsByName(term)
      .then((response) => setResults(response));
  };

  const submitSearchByLetter = async (letter) => {
    await recipeApi
      .getMealsByLetter(letter)
      .then((response) => setResults(response));
  };

  const submitRandomRecipe = async () => {
    setSearchTerm('Random');
    const random = await recipeApi.getRandomMeal().then((response) => {
      setResults(response);
      return response;
    });
  };

  return (
    <>
      <h2>Search By Name</h2>
      <NameSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        submitSearchByName={submitSearchByName}
      />
      <br />
      <h2>Get a Random Recipe</h2>
      <RandomRecipe submitRandomRecipe={submitRandomRecipe} />
      <br />
      <h2>Or Select a Letter to View Recipes</h2>
      <LetterSearch
        submitSearchByLetter={submitSearchByLetter}
        setSearchTerm={setSearchTerm}
      />
      <h4>Results:</h4>
      <SearchResults
        results={results}
        searchTerm={searchTerm}
        setResults={setResults}
      />
    </>
  );
};

export default RecipeSearch;
