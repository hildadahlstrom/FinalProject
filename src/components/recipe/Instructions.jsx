/**
 * Instructions displays the instructions that are given within a recipe
 */
import React from 'react';

const Instructions = ({ instructions }) => {
  return (
    <>
      <h4>Instructions</h4>
      <p>{instructions}</p>
    </>
  );
};

export default Instructions;
