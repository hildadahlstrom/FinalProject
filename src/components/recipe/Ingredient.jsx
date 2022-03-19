/**
 * Ingredient displays each row of the table of ingredients
 */

import React from 'react';

const Ingredient = ({ name, amount }) => {
  return (
    <>
      <td>{amount}</td>
      <td>{name}</td>
    </>
  );
};

export default Ingredient;
