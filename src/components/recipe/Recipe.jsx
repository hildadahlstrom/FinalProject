/**
 * Recipe displays all the parts of each recipe
 */

import React, { useState } from 'react';
import IngredientList from './IngredientList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Instructions from './Instructions';
import RecipePicture from './RecipePicture';
import Accordion from 'react-bootstrap/Accordion';
import FavoriteButton from './FavoriteButton';

const Recipe = ({ recipe, addFavorite, removeFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleChange = (change) => {
    if (change == 'add') {
      addFavorite(recipe);
    } else {
      removeFavorite(recipe);
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <Accordion.Header className='accordion-header'>
        <h4>{recipe.strMeal}</h4>
      </Accordion.Header>
      <Accordion.Body>
        <Row>
          <FavoriteButton
            recipe={recipe}
            isFav={isFavorite}
            handleChange={handleChange}
          />
        </Row>
        <br />
        <Row>
          <Col>
            <IngredientList
              recipe={recipe}
              key={`${recipe.strMeal}-ingredients`}
            />
          </Col>
          <Col>
            <RecipePicture recipe={recipe} />
          </Col>
        </Row>
        <Row>
          <Instructions instructions={recipe.strInstructions} />
        </Row>
        <Row>
          <a href={recipe.strSource}>
            See the original source for this recipe here
          </a>
        </Row>
      </Accordion.Body>
    </>
  );
};

export default Recipe;
