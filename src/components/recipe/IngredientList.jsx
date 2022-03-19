/**
 * IngredientList displays a table with all the recipe's ingredients
 * before that it creates an array that can be easily parsed
 */

import React from 'react';
import Ingredient from './Ingredient';
import Table from 'react-bootstrap/Table';

const IngredientList = ({ recipe }) => {
  const ingList = makeList(recipe);
  return (
    <Table size='sm' striped bordered>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Ingredient</th>
        </tr>
      </thead>
      <tbody>
        {ingList.map((ing, index) => (
          <tr key={index}>
            <Ingredient
              name={ing.name}
              amount={ing.amount}
              key={`${recipe.strMeal}-${index}`}
            />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default IngredientList;

function makeList(recipe) {
  const list = [];
  if (recipe.strIngredient1 !== '') {
    list.push({
      name: recipe.strIngredient1,
      amount: recipe.strMeasure1,
    });
  }
  if (recipe.strIngredient2 !== '') {
    list.push({
      name: recipe.strIngredient2,
      amount: recipe.strMeasure2,
    });
  }
  if (recipe.strIngredient3 !== '') {
    list.push({
      name: recipe.strIngredient3,
      amount: recipe.strMeasure3,
    });
  }
  if (recipe.strIngredient4 !== '') {
    list.push({
      name: recipe.strIngredient4,
      amount: recipe.strMeasure4,
    });
  }
  if (recipe.strIngredient5 !== '') {
    list.push({
      name: recipe.strIngredient5,
      amount: recipe.strMeasure5,
    });
  }
  if (recipe.strIngredient6 !== '') {
    list.push({
      name: recipe.strIngredient6,
      amount: recipe.strMeasure6,
    });
  }
  if (recipe.strIngredient7 !== '') {
    list.push({
      name: recipe.strIngredient7,
      amount: recipe.strMeasure7,
    });
  }
  if (recipe.strIngredient8 !== '') {
    list.push({
      name: recipe.strIngredient8,
      amount: recipe.strMeasure8,
    });
  }
  if (recipe.strIngredient9 !== '') {
    list.push({
      name: recipe.strIngredient9,
      amount: recipe.strMeasure9,
    });
  }
  if (recipe.strIngredient10 !== '') {
    list.push({
      name: recipe.strIngredient10,
      amount: recipe.strMeasure10,
    });
  }
  if (recipe.strIngredient11 !== '') {
    list.push({
      name: recipe.strIngredient11,
      amount: recipe.strMeasure11,
    });
  }
  if (recipe.strIngredient12 !== '') {
    list.push({
      name: recipe.strIngredient12,
      amount: recipe.strMeasure12,
    });
  }
  if (recipe.strIngredient13 !== '') {
    list.push({
      name: recipe.strIngredient13,
      amount: recipe.strMeasure13,
    });
  }
  if (recipe.strIngredient14 !== '') {
    list.push({
      name: recipe.strIngredient14,
      amount: recipe.strMeasure14,
    });
  }
  if (recipe.strIngredient15 !== '') {
    list.push({
      name: recipe.strIngredient15,
      amount: recipe.strMeasure15,
    });
  }
  if (recipe.strIngredient16 !== '') {
    list.push({
      name: recipe.strIngredient16,
      amount: recipe.strMeasure16,
    });
  }
  if (recipe.strIngredient17 !== '') {
    list.push({
      name: recipe.strIngredient17,
      amount: recipe.strMeasure17,
    });
  }
  if (recipe.strIngredient18 !== '') {
    list.push({
      name: recipe.strIngredient18,
      amount: recipe.strMeasure18,
    });
  }
  if (recipe.strIngredient19 !== '') {
    list.push({
      name: recipe.strIngredient19,
      amount: recipe.strMeasure19,
    });
  }
  if (recipe.strIngredient20 !== '') {
    list.push({
      name: recipe.strIngredient20,
      amount: recipe.strMeasure20,
    });
  }
  return list;
}
