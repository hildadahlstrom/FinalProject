/**
 * FavoriteButton creates the favorite button
 * It displays the Add to favorites by default
 * After a recipe is added to favorites, it displays the remove from favorites button
 */
import React from 'react';
import { IoIosHeartEmpty, IoIosHeart } from 'react-icons/io';
import Button from 'react-bootstrap/esm/Button';
const FavoriteButton = ({ recipe, handleChange }) => {
  const handleFavorite = () => {
    recipe.isFavorited = true;
    handleChange('add');
  };
  const handleUnFavorite = () => {
    recipe.isFavorited = false;
    handleChange('remove');
  };
  let button;
  if (recipe.isFavorited) {
    button = (
      <Button
        type='button'
        className='favorite-button'
        onClick={handleUnFavorite}
      >
        <IoIosHeartEmpty />
        {'   '}
        Remove From Favorites
      </Button>
    );
  } else {
    button = (
      <Button
        variant='danger'
        type='button'
        className='favorite-button'
        onClick={handleFavorite}
      >
        <IoIosHeart />
        {'   '}
        Add To Favorites
      </Button>
    );
  }
  return <>{button}</>;
};

export default FavoriteButton;
