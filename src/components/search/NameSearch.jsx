/**
 * NameSearch displays the search box for searching by Name
 */

import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
const NameSearch = ({ searchTerm, setSearchTerm, submitSearchByName }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (e) => {
    const t = setSearchTerm(term);
    submitSearchByName(term);

    setTerm('');
  };
  return (
    <>
      <Form.Control
        type='text'
        id='search-item'
        placeholder='Find a Recipe'
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        required
      />
      <Button
        className='form-control'
        variant='dark'
        type='button'
        onClick={onSubmit}
      >
        Search
      </Button>
    </>
  );
};

export default NameSearch;
