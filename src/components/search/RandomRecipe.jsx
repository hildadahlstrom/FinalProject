/**
 * RandomRecipe component renders a random recipe from the api
 */

import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const RandomRecipe = ({ submitRandomRecipe }) => {
  const handleClick = () => {
    submitRandomRecipe();
  };
  return (
    <>
      <Button variant='dark' className='form-control' onClick={handleClick}>
        Random Recipe
      </Button>
    </>
  );
};

export default RandomRecipe;
