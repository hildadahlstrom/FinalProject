/**
 * LetterSearch displays all of the buttons for each letter, returns the letter value to the search
 */

import React from 'react';
import Button from 'react-bootstrap/Button';

const LetterSearch = ({ submitSearchByLetter, setSearchTerm }) => {
  const onChange = (e) => {
    setSearchTerm(e.target.value);
    submitSearchByLetter(e.target.value);
  };
  return (
    <>
      <Button onClick={onChange} variant='dark' value='A'>
        A
      </Button>
      <Button onClick={onChange} variant='dark' value='B'>
        B
      </Button>
      <Button onClick={onChange} variant='dark' value='C'>
        C
      </Button>
      <Button onClick={onChange} variant='dark' value='D'>
        D
      </Button>
      <Button onClick={onChange} variant='dark' value='E'>
        E
      </Button>
      <Button onClick={onChange} variant='dark' value='F'>
        F
      </Button>
      <Button onClick={onChange} variant='dark' value='G'>
        G
      </Button>
      <Button onClick={onChange} variant='dark' value='H'>
        H
      </Button>
      <Button onClick={onChange} variant='dark' value='I'>
        I
      </Button>
      <Button onClick={onChange} variant='dark' value='J'>
        J
      </Button>
      <Button onClick={onChange} variant='dark' value='K'>
        K
      </Button>
      <Button onClick={onChange} variant='dark' value='L'>
        L
      </Button>
      <Button onClick={onChange} variant='dark' value='M'>
        M
      </Button>
      <Button onClick={onChange} variant='dark' value='N'>
        N
      </Button>
      <Button onClick={onChange} variant='dark' value='O'>
        O
      </Button>
      <Button onClick={onChange} variant='dark' value='P'>
        P
      </Button>
      <Button onClick={onChange} variant='dark' value='Q'>
        Q
      </Button>
      <Button onClick={onChange} variant='dark' value='R'>
        R
      </Button>
      <Button onClick={onChange} variant='dark' value='S'>
        S
      </Button>
      <Button onClick={onChange} variant='dark' value='T'>
        T
      </Button>
      <Button onClick={onChange} variant='dark' value='U'>
        U
      </Button>
      <Button onClick={onChange} variant='dark' value='V'>
        V
      </Button>
      <Button onClick={onChange} variant='dark' value='W'>
        W
      </Button>
      <Button onClick={onChange} variant='dark' value='X'>
        X
      </Button>
      <Button onClick={onChange} variant='dark' value='Y'>
        Y
      </Button>
      <Button onClick={onChange} variant='dark' value='Z'>
        Z
      </Button>
    </>
  );
};

export default LetterSearch;
